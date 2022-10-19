import "./style.scss";
import Button from "../../../components/Button";

const CollaboratorHome = ({ headerActive }) => {
  return (
    <>
      <div className="main-content col-11 mt-5 w-100">
        <div>
          <h3 className="mb-1">Olá, nome_do_usuário</h3>
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
                    Foto do perfil
                  </figure>
                  <div>
                    <p className="body-2 text-primary-600 mb-1">
                      Aline Santesso requisitou 15 dias de férias.
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
                    Foto do perfil
                  </figure>
                  <div>
                    <p className="body-2 text-primary-600 mb-1">
                      Aline Santesso requisitou 15 dias de férias.
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
                    Foto do perfil
                  </figure>
                  <div>
                    <p className="body-2 text-primary-600 mb-1">
                      Aline Santesso requisitou 15 dias de férias.
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
                    Foto do perfil
                  </figure>
                  <div>
                    <p className="body-2 text-primary-600 mb-1">
                      Aline Santesso requisitou 15 dias de férias.
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
            <div className="vacation-schedule py-4 px-4 shadow-md rounded-1">
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
            <ul className="list-unstyled m-0 mb-4">
              <li className="d-flex align-item mb-3">
                <figure className="list-birthday-image rounded-circle overflow-hidden m-0 me-4">
                  Foto do perfil
                </figure>
                <div>
                  <p className="body-2 text-primary-600 mb-1">
                    Gabriel Junior de Souza
                  </p>
                  <p className="caption-regular text-gray-400 m-0">
                    1 de julho
                  </p>
                </div>
              </li>
              <li className="d-flex align-item mb-3">
                <figure className="list-birthday-image rounded-circle overflow-hidden m-0 me-4">
                  Foto do perfil
                </figure>
                <div>
                  <p className="body-2 text-primary-600 mb-1">
                    Gabriel Junior de Souza
                  </p>
                  <p className="caption-regular text-gray-400 m-0">
                    1 de julho
                  </p>
                </div>
              </li>
              <li className="d-flex align-item mb-3">
                <figure className="list-birthday-image rounded-circle overflow-hidden m-0 me-4">
                  Foto do perfil
                </figure>
                <div>
                  <p className="body-2 text-primary-600 mb-1">
                    Gabriel Junior de Souza
                  </p>
                  <p className="caption-regular text-gray-400 m-0">
                    1 de julho
                  </p>
                </div>
              </li>
              <li className="d-flex align-item mb-3">
                <figure className="list-birthday-image rounded-circle overflow-hidden m-0 me-4">
                  Foto do perfil
                </figure>
                <div>
                  <p className="body-2 text-primary-600 mb-1">
                    Gabriel Junior de Souza
                  </p>
                  <p className="caption-regular text-gray-400 m-0">
                    1 de julho
                  </p>
                </div>
              </li>
              <li className="d-flex align-item mb-3">
                <figure className="list-birthday-image rounded-circle overflow-hidden m-0 me-4">
                  Foto do perfil
                </figure>
                <div>
                  <p className="body-2 text-primary-600 mb-1">
                    Gabriel Junior de Souza
                  </p>
                  <p className="caption-regular text-gray-400 m-0">
                    1 de julho
                  </p>
                </div>
              </li>
              <li className="d-flex align-item mb-3">
                <figure className="list-birthday-image rounded-circle overflow-hidden m-0 me-4">
                  Foto do perfil
                </figure>
                <div>
                  <p className="body-2 text-primary-600 mb-1">
                    Gabriel Junior de Souza
                  </p>
                  <p className="caption-regular text-gray-400 m-0">
                    1 de julho
                  </p>
                </div>
              </li>
              <li className="d-flex align-item mb-3">
                <figure className="list-birthday-image rounded-circle overflow-hidden m-0 me-4">
                  Foto do perfil
                </figure>
                <div>
                  <p className="body-2 text-primary-600 mb-1">
                    Gabriel Junior de Souza
                  </p>
                  <p className="caption-regular text-gray-400 m-0">
                    1 de julho
                  </p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
};
export default CollaboratorHome;
