import ForgotPasswordModal from "../../pages/Access/ForgotPassword/ForgotPasswordModal";
import "./style.scss";

// boxShadow = 'lg' ou 'sm' - seleciona o tamanho do box-shadow.
// className = 'button-primary' ou 'button-outline' - seleciona o estilo de botão;
// iconButton = '' ou 'iconButton' - define se o botão é do tipo with icon ou comum.
// txtButton = '' ou '*texto*' - texto que aparece no conteúdo do botão.

function selectButton({
  className = "button-primary",
  dataBsTarget = "",
  iconButton = false,
  modal,
  txtButton = "Button",
  type = "button",
}) {
  const button = iconButton ? (
    <div>
      <button
        className={`btn button-icon fw-700 fs-6 w-100 ${className}`}
        data-bs-target={dataBsTarget}
        data-bs-toggle="modal"
        type={type}
      >
        <span
          className="spinner-border spinner-border"
          role="status"
          aria-hidden="true"
        ></span>
        <span className="button-info">
          <span className="me-2">
            <img src="./images/svg/button-icon.svg" alt="" />
          </span>
          <span>{txtButton}</span>
        </span>
      </button>
    </div>
  ) : (
    <div>
      <button
        className={`btn fw-700 fs-6 w-100 ${className}`}
        data-bs-target={dataBsTarget}
        data-bs-toggle="modal"
        type={type}
      >
        <span
          className="spinner-border spinner-border"
          role="status"
          aria-hidden="true"
        ></span>
        <span className="button-info">{txtButton}</span>
      </button>
    </div>
  );
  const buttonModal = modal ? modal : "";
  return [button, buttonModal];
}

const Button = (props) => {
  return selectButton(props);
};
export default Button;
