import "./style.scss";

// boxShadow = 'lg' ou 'sm' - seleciona o tamanho do box-shadow.
// buttonStyle = 'primary' ou 'outline' - seleciona o estilo de botão;
// iconButton = '' ou 'iconButton' - define se o botão é do tipo with icon ou comum.
// txtButton = '' ou '*texto*' - texto que aparece no conteúdo do botão.

function selectButton({
  boxShadow = "sm",
  buttonStyle = "primary",
  iconButton = false,
  txtButton = "Button",
}) {
  return iconButton ? (
    <div>
      <button
        type="button"
        className={`btn button-primary button-icon fw-700 fs-6 button-shadow-${boxShadow} w-100`}
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
        type="button"
        className={`btn button-${buttonStyle} fw-700 fs-6 button-shadow-${boxShadow} w-100`}
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
}

const Button = (props) => {
  return selectButton(props);
};
export default Button;
