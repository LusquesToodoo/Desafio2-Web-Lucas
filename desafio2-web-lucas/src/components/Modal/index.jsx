import "./style.scss";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useState } from "react";

const Modal = ({
  alt = "",
  dataBsTarget = "",
  href = "",
  src,
  statusModal = "",
  titleModal = "Parturient enim sit id cras.",
  txtButton,
  txtModal = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.",
}) => {
  return (
    <>
      <div
        aria-hidden="true"
        aria-labelledby="staticBackdropLabel"
        className={`modal fade ${statusModal}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        id={dataBsTarget}
        tabIndex="-1"
      >
        <div className="h-100 d-flex">
          <div className="modal-dialog m-auto">
            <div className="modal-content border-0">
              <div className="modal-header border-0 p-4 pb-1">
                <Link className="button-close d-block ms-auto" to={href}>
                  <span
                    aria-label="Close"
                    className="btn-close d-block"
                    data-bs-dismiss="modal"
                    type="button"
                  ></span>
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
        </div>
      </div>
    </>
  );
};
export default Modal;
