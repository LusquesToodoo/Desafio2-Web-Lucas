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
      <div className="personal-information mb-5">
        <div className="first-line d-flex gap-4 mb-4">
          <div className="personal-information-card col-7">
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
          <div className="personal-information-card w-100">
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
          <div className="personal-information-card w-100">
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
          <div className="personal-information-card col-7">
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
    ["Profissional"]: "Elemento - Profissional",
    ["Geral"]: "Elemento - Geral",
    ["Senha"]: "Elemento - Senha",
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
      <div className="">{profilePagesElements[pageActive]}</div>
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
