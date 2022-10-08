import "./style.scss";

// boxShadow = 'lg' ou 'sm' - seleciona o tamanho do box-shadow.
// className = 'button-primary' ou 'button-outline' - seleciona o estilo de botão;
// iconButton = '' ou 'iconButton' - define se o botão é do tipo with icon ou comum.
// txtButton = '' ou '*texto*' - texto que aparece no conteúdo do botão.

function selectButton({
  boxShadow = "sm",
  className = "primary",
  iconButton = false,
  txtButton = "Button",
}) {
  return iconButton ? (
    <div>
      <button
        type="button"
        className={`btn button-icon fw-700 fs-6 w-100 ${className}`}
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
      <button type="button" className={`btn fw-700 fs-6 w-100 ${className}`}>
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
