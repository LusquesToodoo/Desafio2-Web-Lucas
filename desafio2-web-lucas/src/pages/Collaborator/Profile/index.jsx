/*  eslint-disabled*/
import "./style.scss";
import { useState } from "react";
import Button from "../../../components/Button";
import facebook from "./images/facebook.png";
import Input from "../../../components/Input";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedIn.png";
import pencil from "./images/pencil.png";
import Dropdown from "../../../components/Dropdown";

const PersonalInformation = () => {
  return (
    <>
      <div className="personal-information">
        <div className="first-line d-flex gap-4 mb-4">
          <div className="information-card col-7">
            <form className="" action="">
              <h6 className="text-primary-400 mb-4">Dados pessoais</h6>
              <fieldset className="first-field d-flex gap-2 mb-1">
                <span className="personal-information-birthday">
                  <Input txtType="date" txtLabel="Nascimento*">
                    <span className="material-icons fs-5">calendar_month</span>
                  </Input>
                </span>
                <Dropdown
                  txtLabel="Estado Civil"
                  optionsList={["solteiro", "casado", "Viúvo", "Outro"]}
                />
                <Dropdown
                  txtLabel="Gênero"
                  optionsList={["Masculino", "Feminino"]}
                />
              </fieldset>
              <fieldset className="second-field d-flex gap-2 mb-1">
                <Input txtLabel="CPF*" txtPlaceholder="000.000.000-00" />
                <Input txtLabel="RG*" txtPlaceholder="00.000-000" />
              </fieldset>
              <fieldset className="third-field d-flex gap-2 mb-0">
                <Input txtLabel="PIS" txtPlaceholder="00.000-00" />
                <Input txtLabel="CTPS" txtPlaceholder="00.000-000" />
              </fieldset>
            </form>
          </div>
          <div className="information-card w-100">
            <h6 className="text-primary-400 mb-4">Sobre mim</h6>
            <form>
              <textarea
                className="modal-textarea input text-gray-700 p-3 w-100"
                type="text"
              ></textarea>
            </form>
          </div>
        </div>

        <div className="second-line d-flex gap-4">
          <div className="information-card w-100">
            <h6 className="text-primary-400 mb-4">Dados bancários</h6>
            <form>
              <fieldset className="mb-2">
                <Dropdown
                  txtLabel="Banco*"
                  optionsList={["(260) - Nu Pagamentos S.A.", "Outro"]}
                />
              </fieldset>
              <fieldset className="d-flex gap-2 mb-2">
                <Input txtLabel="Agência*" txtPlaceholder="00000" />
                <span className="bank-account">
                  <Input
                    txtLabel="Conta (com dígito)*"
                    txtPlaceholder="000000000-0"
                  />
                </span>
              </fieldset>
              <fieldset>
                <Input txtLabel="PIX*" txtPlaceholder="00000000000000000000" />
              </fieldset>
            </form>
          </div>
          <div className="information-card col-7">
            <form className="" action="">
              <h6 className="text-primary-400 mb-4">dados de contato</h6>
              <fieldset className="first-field d-flex gap-2 mb-2">
                <Input txtLabel="CEP*" txtPlaceholder="00000-000" />
                <Input txtLabel="Cidade*" txtPlaceholder="00000-000" />
                <Dropdown optionsList={["SP"]} />
              </fieldset>
              <fieldset className="second-field d-flex gap-2">
                <Input txtLabel="Endereço*" txtPlaceholder="Avenida Moaci" />
                <Input txtLabel="Cidade*" txtPlaceholder="00000-000" />
              </fieldset>
              <fieldset className="third-field d-flex gap-2">
                <Input txtLabel="Complemento" txtPlaceholder="Apartamento 72" />
                <Input txtLabel="Bairro*" txtPlaceholder="Planalto Paulista" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
const Professional = () => {
  const ModalAcademicEducation = ({ dataBsTarget }) => {
    return (
      <div
        aria-hidden="true"
        aria-labelledby="staticBackdropLabel"
        class="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        id={dataBsTarget}
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header p-0 border-0 mb-4">
              <h5 className="text-primary-400">Formação acadêmica</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div class="modal-body p-0">
                <Input
                  txtLabel="Instituição de ensino*"
                  txtPlaceholder="ex. Inatel"
                />
                <span className="d-block m-2"></span>
                <Input
                  txtLabel="Formação*"
                  txtPlaceholder="ex. Ciência da Computação"
                />
                <fieldset className="d-flex gap-2">
                  <Dropdown
                    txtLabel="Ano de início"
                    optionsList={["2022"]}
                    txtPlaceholder="Escolha o ano"
                  />
                  <Dropdown
                    txtLabel="Ano de conclusão (ou previsão)"
                    optionsList={["2022"]}
                    txtPlaceholder="Escolha o ano"
                  />
                </fieldset>
              </div>
              <div class="modal-footer p-0 border-0 d-flex justify-content-center mt-3">
                <Button
                  className="button-gray"
                  txtButton="Salvar"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="professional d-flex gap-4">
        <div className="first-column w-100">
          <div className="first-field information-card mb-4">
            <div className="d-flex justify-content-between mb-4">
              <h6 className="text-primary-400 m-0">Formação acadêmica</h6>
              <div>
                <Button
                  className="button-primary add p-0"
                  modal={
                    <ModalAcademicEducation dataBsTarget="academic-formation" />
                  }
                  dataBsTarget="#academic-formation"
                  txtButton="+"
                />
              </div>
            </div>
            <ul className="list-unstyled mb-3">
              <li className="formation-item d-flex align-items-center justify-content-between py-2 px-3">
                <div>
                  <p className="body-1-semibold m-0">
                    Universidade José do Rosário Vellano
                  </p>
                  <p className="body-2 text-gray-500 mb-2">
                    Ciência da Computação
                  </p>
                  <p className="caption text-gray-400 mb-0">2015-2018</p>
                </div>
                <div className="text-primary-500">
                  <span class="material-icons">edit</span>
                </div>
              </li>
            </ul>
            <p className="caption text-primary-500 text-center m-0">ver mais</p>
          </div>
          <div className="second-field information-card">
            <h6 className="text-primary-400 mb-3">Especialidades</h6>
            <div className="d-flex align-items-end gap-2 mb-3">
              <Input
                txtLabel="Competência"
                txtPlaceholder="ex. metodologias ágeis"
              />
              <Button
                txtButton="+"
                className="button-primary add input-add p-0"
              />
            </div>
            <ul className="list-unstyled d-flex gap-2 flex-wrap">
              <li className="specialty-item bg-primary-400">
                <span>UI/UX</span>
                <span className="button-close">
                  <i class="bi bi-x"></i>
                </span>
              </li>
              <li className="specialty-item bg-alert-success">
                <span>Adobe Photoshop</span>
                <span className="button-close">
                  <i class="bi bi-x"></i>
                </span>
              </li>
              <li className="specialty-item bg-primary-500">
                <span>Figma</span>
                <span className="button-close">
                  <i class="bi bi-x"></i>
                </span>
              </li>
              <li className="specialty-item bg-primary-300">
                <span>Trello</span>
                <span className="button-close">
                  <i class="bi bi-x"></i>
                </span>
              </li>
              <li className="specialty-item bg-primary-600">
                <span>Wireframes</span>
                <span className="button-close">
                  <i class="bi bi-x"></i>
                </span>
              </li>
              <li className="specialty-item bg-gray-300">
                <span>...</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="second-column w-100">
          <div className="information-card h-100">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="text-primary-400">Certificados</h6>
              <div>
                <Button txtButton="+" className="button-primary add p-0" />
              </div>
            </div>
            <ul className="list-unstyled mb-3">
              <li className="certificate-item d-flex align-items-center justify-content-between py-2 px-3 mb-2">
                <div>
                  <p className="body-1-semibold m-0">
                    Universidade José do Rosário Vellano
                  </p>
                  <p className="body-2 text-gray-500 mb-2">
                    Ciência da Computação
                  </p>
                  <p className="caption text-gray-400 mb-0">2009</p>
                </div>
                <div className="text-primary-500">
                  <span class="material-icons">edit</span>
                </div>
              </li>
              <li className="certificate-item d-flex align-items-center justify-content-between py-2 px-3 mb-2">
                <div>
                  <p className="body-1-semibold m-0">
                    Universidade José do Rosário Vellano
                  </p>
                  <p className="body-2 text-gray-500 mb-2">
                    Ciência da Computação
                  </p>
                  <p className="caption text-gray-400 mb-0">2009</p>
                </div>
                <div className="text-primary-500">
                  <span class="material-icons">edit</span>
                </div>
              </li>
              <li className="certificate-item d-flex align-items-center justify-content-between py-2 px-3 mb-2">
                <div>
                  <p className="body-1-semibold m-0">
                    Universidade José do Rosário Vellano
                  </p>
                  <p className="body-2 text-gray-500 mb-2">
                    Ciência da Computação
                  </p>
                  <p className="caption text-gray-400 mb-0">2009</p>
                </div>
                <div className="text-primary-500">
                  <span class="material-icons">edit</span>
                </div>
              </li>
              <li className="certificate-item d-flex align-items-center justify-content-between py-2 px-3 mb-2">
                <div>
                  <p className="body-1-semibold m-0">
                    Universidade José do Rosário Vellano
                  </p>
                  <p className="body-2 text-gray-500 mb-2">
                    Ciência da Computação
                  </p>
                  <p className="caption text-gray-400 mb-0">2009</p>
                </div>
                <div className="text-primary-500">
                  <span class="material-icons">edit</span>
                </div>
              </li>
            </ul>
            <p className="caption text-primary-500 text-center">ver mais</p>
          </div>
        </div>
      </div>
    </>
  );
};
const Geral = () => {
  return (
    <>
      <div className="Geral">
        <div className="first-line d-flex gap-4">
          <div className="information-card w-100">
            <div className="d-flex justify-content-between mb-4">
              <h6 className="text-primary-400 m-0">Voluntariado</h6>
              <div>
                <Button
                  className="button-primary add p-0"
                  modal={
                    ""
                    // <ModalAcademicEducation dataBsTarget="academic-formation" />
                  }
                  dataBsTarget="#academic-formation"
                  txtButton="+"
                />
              </div>
            </div>
            <ul className="list-unstyled mb-3">
              <li className="volunteer-item py-2 px-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <p className="body-1-semibold m-0">
                      Assembleia de Deus Missão
                    </p>
                    <p className="body-2 text-gray-500 mb-2">Líder Criativo</p>
                    <p className="caption text-gray-400 mb-0">2013-presente</p>
                  </div>
                  <div className="text-primary-500">
                    <span class="material-icons">edit</span>
                  </div>
                </div>
                <p className="body-2 fw-300 text-gray-600 pb-2">
                  Responsável pela liderança criativa do ministério de mídia do
                  campo da Assembleia de Deus Missão há mais de 8 anos, atuando
                  na criação de campanhas publicitárias, organização de
                  congressos locais e também pelas fotos dos eventos.
                </p>
              </li>
            </ul>
          </div>
          <div className="information-card w-100">
            <h6 className="text-primary-400 mb-4">Interesses</h6>
            <div className="d-flex align-items-end gap-2 mb-3">
              <Input
                txtLabel="Competência"
                txtPlaceholder="ex. metodologias ágeis"
              />
              <Button
                txtButton="+"
                className="button-primary add input-add p-0"
              />
            </div>
            <ul className="list-unstyled d-flex gap-2 flex-wrap">
              <li className="interests-item bg-primary-400">
                <span>Música</span>
                <span className="button-close">
                  <i class="bi bi-x"></i>
                </span>
              </li>
              <li className="interests-item bg-alert-success">
                <span>Cinema</span>
                <span className="button-close">
                  <i class="bi bi-x"></i>
                </span>
              </li>
              <li className="interests-item bg-primary-500">
                <span>Fotografia</span>
                <span className="button-close">
                  <i class="bi bi-x"></i>
                </span>
              </li>
              <li className="interests-item bg-primary-300">
                <span>Literatura</span>
                <span className="button-close">
                  <i class="bi bi-x"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="second-line mt-4">
          <div className="information-card">
            <div className="d-flex justify-content-between mb-5">
              <h6 className="text-primary-400 m-0">Idiomas</h6>
              <div>
                <Button
                  className="button-primary add p-0"
                  dataBsTarget="#academic-formation"
                  txtButton="+"
                />
              </div>
            </div>
            <ul className="languages-list list-unstyled m-0">
              <li className="languages-item languages-item-header text-gray-400 mb-3">
                <div className="w-100">
                  <p className="m-0">Idioma</p>
                </div>
                <div className="w-100">
                  <p className="m-0">Avançado</p>
                </div>
              </li>
              <li className="languages-item">
                <div className="w-100">
                  <p className="fw-700 m-0">Inglês</p>
                </div>
                <div className="w-100 d-flex align-content-center justify-content-between">
                  <p className="m-0">Avançado</p>
                  <span class="material-icons text-primary-500">edit</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
const Password = () => {
  return (
    <>
      <div className="page-profile-Password px-3">
        <div className="w-50">
          <Input
            txtLabel="Senha atual"
            txtPlaceholder="Insira sua senha atual"
          />
          <span className="d-block m-2"></span>
          <Input
            txtLabel="Nova senhal"
            txtPlaceholder="Ao menos 8 caracteres"
          />
          <span className="d-block m-2"></span>
          <Input
            txtLabel="Repetir nova senha"
            txtPlaceholder="Insira sua senha atual"
          />
          <p className="caption text-gray-400 mt-4 pe-5">
            Dica: Sua senha deve ter, ao menos, 8 caracteres. Para torná-la
            ainda mais forte, você deve usar caracteres maiúsculos e minúsculos,
            números e símbolos, como: #$@%!&*.
          </p>
        </div>
      </div>
    </>
  );
};

const HeaderProfile = () => {
  return (
    <div className="profile-info-container">
      <div className="profile-info-header my-5">
        <div className="profile-info-header-cover">
          <figure>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/415/247/651/bb-8-jakku-robot-star-wars-wallpaper-preview.jpg"
              alt="capa"
            />
          </figure>
          <div className="change-cover bg-alert-success d-flex">
            <div className="text-light m-auto">
              <img className="m-auto d-block" src={pencil} alt="edit" />
            </div>
          </div>
        </div>
        <div className="position-relative w-100 d-flex align-items-center justify-content-between">
          <div className="profile-user-info d-flex align-items-end gap-5">
            <div className="position-relative">
              <figure className="profile-info-image m-0">
                <img
                  className="w-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  alt="perfil"
                />
              </figure>
              <div className="change-profile-image bg-alert-success d-flex">
                <figure className="text-light m-auto">
                  <img className="m-auto d-block" src={pencil} alt="edit" />
                </figure>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="mb-2">Igor Santana</h3>
              <p className="body-2 text-gray-400 mb-1">
                Chief Executive Office
              </p>
              <p className="body-2 text-gray-400 m-0">Desde 2017</p>
            </div>
          </div>
          <div className="d-flex gap-1 mt-4">
            <a href="#">
              <figure>
                <img src={facebook} alt="facebook" />
              </figure>
            </a>
            <a href="#">
              <figure>
                <img src={instagram} alt="instagram" />
              </figure>
            </a>
            <a href="#">
              <figure>
                <img src={linkedin} alt="linkedin" />
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainProfile = () => {
  const profilePagesElements = {
    ["Info pessoal"]: <PersonalInformation />,
    ["Profissional"]: <Professional />,
    ["Geral"]: <Geral />,
    ["Senha"]: <Password />,
  };
  const [pageActive, setPageActive] = useState("Info pessoal");
  return (
    <section className="main-profile-info">
      <div className="d-flex align-content-center justify-content-between mb-4 pb-2">
        <ul className="fw-600 text-gray-500 d-flex list-unstyled gap-4 m-0">
          {Object.keys(profilePagesElements).map((page) => (
            <li
              className={`${
                page === pageActive ? "active text-primary-400" : ""
              } nav-profile py-2 px-3`}
              onClick={() => {
                setPageActive(page);
              }}
            >
              {page}
            </li>
          ))}
        </ul>
        <div className="d-flex align-items-center">
          <p className="sidebar text-primary-400 m-0 me-4 pe-2 d-none">
            Alterações salvas!
          </p>
          <Button className="button-gray py-2" txtButton="Salvar" />
        </div>
      </div>
      <div className="mb-5">{profilePagesElements[pageActive]}</div>
    </section>
  );
};

const Profile = () => {
  return (
    <>
      {HeaderProfile()}
      {MainProfile()}
    </>
  );
};
export default Profile;
/* eslint-enable */
