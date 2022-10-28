import Dropdown from "../../../../components/Dropdown";
import Input from "../../../../components/Input";
import "./style.scss";

const ModalHelpdesk = () => {
  return (
    <div
      class="modal fade"
      id="modal-helpdesk"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header pb-2">
            <h5 className="text-primary-400 m-0 mb-4">Novo chamado</h5>
          </div>
          <div class="modal-body">
            <Dropdown
              txtPlaceholder=""
              txtLabel="Categoria*"
              optionsList={["Recursos humanos"]}
            />
            <Input txtLabel="Título*" txtPlaceholder="" />
            <label class="input-label body-2 w-100 text-gray-500">
              <p class="mb-2">Descrição*</p>
              <textarea
                className="modal-textarea input p-3 w-100 mb-2"
                type="text"
              ></textarea>
            </label>

            <label class="input-label body-2 w-100 text-gray-500">
              <p class="mb-2">{"Anexar (opcional)"}</p>
              <input
                class="input p-3 w-100  d-none"
                placeholder=""
                type="file"
                value=""
              />
              <div className="input-select-file text-primary-400 bg-primary-50 d-flex">
                <p className="body-2 m-auto position-relative">
                  <span className="upload-icon">
                    <img src="./images/svg/upload.svg" alt="sa" />
                  </span>
                  Clique ou arraste seus arquivos aqui
                </p>
              </div>
            </label>
          </div>
          <div class="modal-footer border-0 pt-0 pb-3 d-flex justify-content-center">
            <span
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <div>
                <button
                  class="btn fw-700 fs-6 w-100 button-primary button-cancel"
                  data-bs-toggle="false"
                  type="button"
                >
                  <span
                    class="spinner-border spinner-border"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span class="button-info">Cancelar</span>
                </button>
              </div>
              <div></div>
            </span>
            <div>
              <button
                class="btn fw-700 fs-6 w-100 button-gray"
                data-bs-toggle="false"
                type="submit"
              >
                <span
                  class="spinner-border spinner-border"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span class="button-info">Enviar</span>
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalHelpdesk;
