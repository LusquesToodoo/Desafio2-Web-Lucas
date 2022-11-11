import "./style.scss";
import axios from "axios";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import API from "../../../components/API";

const CollaboratorHome = () => {
  const mounth = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let birthdayList = [];
  const [birthdayItems, setBirthdayItems] = useState(undefined);
  const [user, setUser] = useState({});

  const createBirthdayList = () => {
    const filtrateDate = ([day, birthdayMounth, ...year]) => {
      return `${day} de ${mounth[+birthdayMounth - 1]}`;
    };

    if (!birthdayList.length) {
      setBirthdayItems(
        <p className="overline">Não há aniversariantes para este mês...</p>,
      );
      return;
    }

    setBirthdayItems(
      birthdayList.map((person) => (
        <li className="d-flex align-item mb-3">
          <figure className="list-birthday-image rounded-circle overflow-hidden m-0 me-4">
            {person.picture ? (
              <img className="w-100" src={person.picture} alt={person.name} />
            ) : (
              <div className="d-flex bg-gray-100 w-100 h-100">
                <i class="bi bi-person-fill m-auto"></i>
              </div>
            )}
          </figure>
          <div>
            <p className="body-2 text-primary-600 mb-1">{person.name}</p>
            <p className="caption-regular text-gray-400 m-0">
              {filtrateDate(
                person.birthday.split(/[A-z]/)[0].split("-").reverse(),
              )}
            </p>
          </div>
        </li>
      )),
    );
  };

  const getBirthdayList = async () => {
    [birthdayList] = await API(
      "https://erm-api.azurewebsites.net/Employee/birthdayOfTheMonth",
    );
    birthdayList = birthdayList.data;
    createBirthdayList();
  };
  const getUserInfo = async () => {
    const authorization = {
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("token") || sessionStorage.getItem("token")
        }`,
      },
    };
    await axios
      .get(
        `https://erm-api.azurewebsites.net/Employee/${localStorage.getItem(
          "userId",
        )}`,
        authorization,
      )
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBirthdayList();
    getUserInfo();
  }, []);

  return (
    <>
      <div className="main-content col-11 mt-5 w-100">
        <div>
          <h3 className="mb-1">Olá, {user.name}</h3>
          <p className="body-2 text-gray-400 mb-5">Bem-vindo de volta.</p>
          <p className="overline-2 text-uppercase text-primary-400 fw-700 ls">
            Notícias e anúncios
          </p>
        </div>
        <div className="d-flex gap-4">
          <section className="home-container-left w-100">
            <ul className="list-unstyled m-0 mb-4">
              <li className="news-list-item px-3 rounded-1 d-flex align-items-center justify-content-between shadow-sm mb-2">
                <div className="d-flex align-items-center">
                  <figure className="list-report-image rounded-circle overflow-hidden m-0 me-4">
                    <img
                      className="w-100"
                      src="https://raw.githubusercontent.com/LusquesToodoo/Desafio2-Web-Lucas/main/desafio2-web-lucas/public/images/png/profile.png"
                      alt=""
                    />
                  </figure>
                  <div>
                    <p className="body-2 text-primary-600 mb-1">
                      Igor Santana requisitou 15 dias de férias.
                    </p>
                    <div className="d-flex">
                      <p className="sector-label bg-primary-400 text-light m-0 me-3">
                        Recursos Humanos
                      </p>
                      <p className="caption-regular text-gray-400 m-0">
                        1 semana
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                ></button>
              </li>
              <li className="news-list-item px-3 rounded-1 d-flex align-items-center justify-content-between shadow-sm mb-2">
                <div className="d-flex align-items-center">
                  <figure className="list-report-image rounded-circle overflow-hidden m-0 me-4">
                    <img
                      className="w-100"
                      src="https://raw.githubusercontent.com/LusquesToodoo/Desafio2-Web-Lucas/main/desafio2-web-lucas/public/images/png/profile.png"
                      alt=""
                    />
                  </figure>
                  <div>
                    <p className="body-2 text-primary-600 mb-1">
                      Igor Santana requisitou 15 dias de férias.
                    </p>
                    <div className="d-flex">
                      <p className="sector-label bg-primary-400 text-light m-0 me-3">
                        Recursos Humanos
                      </p>
                      <p className="caption-regular text-gray-400 m-0">
                        1 semana
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                ></button>
              </li>
              <li className="news-list-item px-3 rounded-1 d-flex align-items-center justify-content-between shadow-sm mb-2">
                <div className="d-flex align-items-center">
                  <figure className="list-report-image rounded-circle overflow-hidden m-0 me-4">
                    <img
                      className="w-100"
                      src="https://raw.githubusercontent.com/LusquesToodoo/Desafio2-Web-Lucas/main/desafio2-web-lucas/public/images/png/profile.png"
                      alt=""
                    />
                  </figure>
                  <div>
                    <p className="body-2 text-primary-600 mb-1">
                      Igor Santana requisitou 15 dias de férias.
                    </p>
                    <div className="d-flex">
                      <p className="sector-label bg-primary-400 text-light m-0 me-3">
                        Recursos Humanos
                      </p>
                      <p className="caption-regular text-gray-400 m-0">
                        1 semana
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                ></button>
              </li>
              <li className="news-list-item px-3 rounded-1 d-flex align-items-center justify-content-between shadow-sm">
                <div className="d-flex align-items-center">
                  <figure className="list-report-image rounded-circle overflow-hidden m-0 me-4">
                    <img
                      className="w-100"
                      src="https://raw.githubusercontent.com/LusquesToodoo/Desafio2-Web-Lucas/main/desafio2-web-lucas/public/images/png/profile.png"
                      alt=""
                    />
                  </figure>
                  <div>
                    <p className="body-2 text-primary-600 mb-1">
                      Igor Santana requisitou 15 dias de férias.
                    </p>
                    <div className="d-flex">
                      <p className="sector-label bg-primary-400 text-light m-0 me-3">
                        Recursos Humanos
                      </p>
                      <p className="caption-regular text-gray-400 m-0">
                        1 semana
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                ></button>
              </li>
              <li className="news-list-item list-show-more w-100 mx-auto shadow-sm">
                <p className="body-2-md text-primary-400 text-center m-0">
                  ver mais
                </p>
              </li>
            </ul>
            <div className="vacation-schedule py-4 px-4 shadow-sm rounded-1">
              <div className="d-flex justify-content-between px-2 mb-5">
                <h6>Férias agendadas</h6>
                <span className="vocation-button d-block">
                  <Button
                    className="button-primary w-auto"
                    dataBsTarget=""
                    iconButton={false}
                    modal=""
                    onClick={undefined}
                    txtButton="Requisitar mudanças"
                    type="button"
                  />
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="overline-2 text-gray-400 text-uppercase mb-2 fw-700">
                    Início previsto
                  </p>
                  <h2 className="m-0">15 jul. 2021</h2>
                </div>
                <div>
                  <p className="overline-2 text-gray-400 text-uppercase mb-2 fw-700">
                    Fim previsto
                  </p>
                  <h2 className="m-0">30 jul. 2021</h2>
                </div>
              </div>
            </div>
          </section>
          <aside className="home-container-right container p-4 pb-2 mx-0 rounded-1 shadow-sm">
            <h6 className="text-gray-700 mb-4">Próximos aniversários</h6>
            <ul className="list-unstyled m-0 mb-4">{birthdayItems}</ul>
          </aside>
        </div>
      </div>
    </>
  );
};
export default CollaboratorHome;
