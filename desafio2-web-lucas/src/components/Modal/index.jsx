import "./style.scss";
import { Link } from "react-router-dom";
import Button from "../Button";
import Loading from "./loading.gif";

const Modal = ({
  alt = "", // Texto alternativo da imagem do modal.
  dataBsTarget = "", // Id do modal.
  href = "", // Link oara onde botões do modão redireciona.
  src, // caminho da imagem do modal.
  statusLoading = "d-none", // define momentos em qua loading deve aparecer.
  statusModal = "", // success || error.
  titleModal = "Parturient enim sit id cras.", // título do modal.
  txtButton, // conteúdo do botão - botão só existe a partir do momento que um conteúdo é atrelado ao seu botão.
  txtModal = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.", // conteúdo do texto.
}) => {
  return (
    <>
      <div
        aria-hidden="true"
        aria-labelledby="staticBackdropLabel"
        className={`modal fade`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        id={dataBsTarget}
        tabIndex="-1"
      >
        <div className="h-100 d-flex">
          <div className={`modal-dialog m-auto ${statusModal}`}>
            <div className="modal-content border-0">
              <div className="modal-header border-0 p-4 pb-1">
                <Link className="button-close d-block ms-auto" to={href}>
                  <span
                    aria-label="Close"
                    className="btn-close d-block"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                  </span>
                </Link>
              </div>
              <div className="modal-body pt-0 text-center">
                <figure className="mb-4">
                  <img src={`./images/${src}`} alt={alt} />
                </figure>
                <div className="modal-info">
                  <h5 className={`title mb-2 ${statusModal}`}>{titleModal}</h5>
                  <p className="body-2 text-gray-400 my-0 mx-auto">
                    {txtModal}
                  </p>
                </div>
                <div
                  className={`${
                    txtButton ? "button-modal mx-auto mt-4" : "d-none"
                  }`}
                >
                  <Link className="button-close d-block ms-auto" to={href}>
                    <span aria-label="Close" data-bs-dismiss="modal">
                      <Button txtButton={txtButton} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={`modal-dialog m-auto modal-loading ${statusLoading}`}>
            <div className="modal-content border-0">
              <div className="modal-body pt-0 text-center pb-0 text-center rounded-1">
                <figure className="loading-container m-0 p-0">
                  <img className="w-100" src={Loading} alt="Loading..." />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
