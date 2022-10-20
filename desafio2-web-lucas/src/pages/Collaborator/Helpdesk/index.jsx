import "./style.scss";
import Dropdown from "../../../components/Dropdown";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
const Helpdesk = () => {
  return (
    <section className="w-100 mt-5 main-helpdesk pb-5">
      <h4 className="text-primary-600 mb-5 pb-3">Helpdesk</h4>
      <table className="helpdesk-table w-100 shadow-lg">
        <thead className="d-block w-100">
          <tr className="d-flex align-items-center justify-content-between w-100 py-4">
            <td className="w-auto">
              <Link className="w-auto" to={"/collaborator-team"}>
                <figure className="search-image m-0">
                  <img className="w-100" src="./images/svg/search.svg" alt="" />
                </figure>
              </Link>
            </td>
            <td className="w-auto">
              <Button
                className="button-primary body-2 py-2 px-5 border-0"
                dataBsTarget="#modalRequestVacation"
                onClick=""
                txtButton="+ Nova solicitação"
                type="button"
                modal={<>Modal vai aqui</>}
              />
            </td>
          </tr>
          <tr className="bg-primary-500 text-light d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-md-semibold py-3">
              Título
              <span className="vacation-th-icon ms-1">
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </th>
            <th className="d-block body-2-md-semibold py-3">
              Categoria
              <span className="vacation-th-icon ms-1">
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </th>
            <th className="d-block body-2-md-semibold py-3">
              Data
              <span className="vacation-th-icon ms-1">
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </th>
            <th className="d-block body-2-md-semibold py-3">
              Status
              <span className="vacation-th-icon ms-1">
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-semibold py-4">
              Contrato de Estágio
            </th>
            <th className="d-block body-2 py-4">Recursos Humanos</th>
            <th className="d-block body-2 py-4">02 jun 2021</th>
            <th className="d-block py-4 caption fw-600">
              <span className="bg-alert-warning-dark text-light py-1 px-3 rounded-1">
                Em andamento
              </span>
            </th>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-semibold py-4">
              Contrato de Estágio
            </th>
            <th className="d-block body-2 py-4">Recursos Humanos</th>
            <th className="d-block body-2 py-4">02 jun 2021</th>
            <th className="d-block py-4 caption fw-600">
              <span className="bg-alert-success-dark text-light py-1 px-3 rounded-1">
                Aberto
              </span>
            </th>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-semibold py-4">
              Contrato de Estágio
            </th>
            <th className="d-block body-2 py-4">Recursos Humanos</th>
            <th className="d-block body-2 py-4">02 jun 2021</th>
            <th className="d-block py-4 caption fw-600">
              <span className="bg-alert-error text-light py-1 px-3 rounded-1">
                Finalizado
              </span>
            </th>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-semibold py-4">
              Contrato de Estágio
            </th>
            <th className="d-block body-2 py-4">Recursos Humanos</th>
            <th className="d-block body-2 py-4">02 jun 2021</th>
            <th className="d-block py-4 caption fw-600">
              <span className="bg-alert-warning-dark text-light py-1 px-3 rounded-1">
                Em andamento
              </span>
            </th>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-semibold py-4">
              Contrato de Estágio
            </th>
            <th className="d-block body-2 py-4">Recursos Humanos</th>
            <th className="d-block body-2 py-4">02 jun 2021</th>
            <th className="d-block py-4 caption fw-600">
              <span className="bg-alert-success-dark text-light py-1 px-3 rounded-1">
                Aberto
              </span>
            </th>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-semibold py-4">
              Contrato de Estágio
            </th>
            <th className="d-block body-2 py-4">Recursos Humanos</th>
            <th className="d-block body-2 py-4">02 jun 2021</th>
            <th className="d-block py-4 caption fw-600">
              <span className="bg-alert-error text-light py-1 px-3 rounded-1">
                Finalizado
              </span>
            </th>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-semibold py-4">
              Contrato de Estágio
            </th>
            <th className="d-block body-2 py-4">Recursos Humanos</th>
            <th className="d-block body-2 py-4">02 jun 2021</th>
            <th className="d-block py-4 caption fw-600">
              <span className="bg-alert-warning-dark text-light py-1 px-3 rounded-1">
                Em andamento
              </span>
            </th>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-semibold py-4">
              Contrato de Estágio
            </th>
            <th className="d-block body-2 py-4">Recursos Humanos</th>
            <th className="d-block body-2 py-4">02 jun 2021</th>
            <th className="d-block py-4 caption fw-600">
              <span className="bg-alert-success-dark text-light py-1 px-3 rounded-1">
                Aberto
              </span>
            </th>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-semibold py-4">
              Contrato de Estágio
            </th>
            <th className="d-block body-2 py-4">Recursos Humanos</th>
            <th className="d-block body-2 py-4">02 jun 2021</th>
            <th className="d-block py-4 caption fw-600">
              <span className="bg-alert-error text-light py-1 px-3 rounded-1">
                Finalizado
              </span>
            </th>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-semibold py-4">
              Contrato de Estágio
            </th>
            <th className="d-block body-2 py-4">Recursos Humanos</th>
            <th className="d-block body-2 py-4">02 jun 2021</th>
            <th className="d-block py-4 caption fw-600">
              <span className="bg-alert-error text-light py-1 px-3 rounded-1">
                Finalizado
              </span>
            </th>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-semibold py-4 pb-2"></th>
            <th className="d-block body-2 py-4 pb-2"></th>
            <th className="d-block body-2 py-4 text-gray-400 d-flex align-items-center  w-auto pb-2">
              <p className="m-0">Registros por página</p>
              <span className="helpdesk-span-dropdown d-flex align-items-center">
                <Dropdown
                  id="helpdesk-menu-dropdown"
                  txtLabel=""
                  optionsList={["10", "25", "50"]}
                />
                <i className="bi bi-caret-down-fill h-25"></i>
              </span>
            </th>
            <th className="d-flex align-items-center justify-content-center gap-4 py-4 caption fw-600 pb-2 ">
              <span>1-10 de 35</span>
              <div className="d-flex gap-3 data-table-btn">
                <figure className="m-0">
                  <img src="./images/png/arrow_left.png" alt="" />
                </figure>
                <figure className="m-0">
                  <img src="./images/png/arrow_right.png" alt="" />
                </figure>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default Helpdesk;
