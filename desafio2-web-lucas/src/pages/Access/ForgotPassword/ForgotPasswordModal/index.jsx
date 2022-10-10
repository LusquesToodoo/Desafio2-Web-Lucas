import "./style.scss";
import { Link } from "react-router-dom";

const ForgotPasswordModal = ({ dataBsTarget }) => {
  return (
    <div
      aria-hidden="true"
      aria-labelledby={`${dataBsTarget}`}
      className="modal fade"
      id={`${dataBsTarget}`}
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header p-3 pb-2 border-0">
            <Link to={"/"} className="btn-close-x d-block ms-auto">
              <button
                type="button"
                class="btn-close p-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </Link>
          </div>
          <div class="modal-body p-0">
            <figure className="m-0 mx-auto w-100 text-center mb-4">
              <img
                src="./images/svg/forgotPasswordModal.svg"
                alt="email enviado"
              />
            </figure>
            <div className="text-center text-gray-400 modal-info">
              <h5 className="text-primary-400">
                Verifique sua caixa de entrada
              </h5>
              <p className="mx-auto mb-5">
                Enviamos um email com instruções para redefinir sua senha.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPasswordModal;
