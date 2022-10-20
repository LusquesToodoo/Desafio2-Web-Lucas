import Button from "../../../../components/Button";
import ModalDatas from "../ModalDatas";

const VacarionTableDatas = () => {
  return (
    <div className="data-vacation shadow-lg mb-4">
      <div className="d-flex justify-content-between align-items-center p-4 w-100">
        <h6 className="text-primary-400 m-0">Férias</h6>
        <div>
          <Button
            className="button-primary body-2 py-2 px-5"
            dataBsTarget="#modalRequestVacation"
            onClick=""
            txtButton="+ Solicitar férias"
            type="button"
            modal={<ModalDatas />}
          />
        </div>
      </div>
      <table className="vacation-table d-block">
        <thead className="d-block px-4 bg-primary-500 w-100">
          <tr className="w-100 d-flex">
            <th className="body-2-semibold text-light d-block py-3">
              Início previsto
              <span className="vacation-th-icon ms-1">
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </th>
            <th className="body-2-semibold text-light d-block py-3">
              Retorno previsto
              <span className="vacation-th-icon ms-1">
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </th>
            <th className="body-2-semibold text-light d-block py-3 flex-grow-1 m-0">
              Status
              <span className="vacation-th-icon ms-1">
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="d-block px-4">
          <tr className="d-flex">
            <td className="body-2 text-gray-500 d-block py-3">14/05/2020</td>
            <td className="body-2 text-gray-500 d-block py-3">14/05/2020</td>
            <td className="body-2 text-light d-block py-3 flex-grow-1 m-0">
              <span className="bg-alert-success py-1 px-3 rounded-1 overline-2 fw-600">
                Aprovado
              </span>
            </td>
          </tr>
          <tr className="d-flex">
            <td className="body-2 text-gray-500 d-block py-3">14/05/2020</td>
            <td className="body-2 text-gray-500 d-block py-3">14/05/2020</td>
            <td className="body-2 text-light d-block py-3 flex-grow-1 m-0">
              <span className="bg-alert-warning-dark py-1 px-3 rounded-1 overline-2 fw-600">
                Em análise
              </span>
            </td>
          </tr>
          <tr className="d-flex">
            <td className="body-2 text-gray-500 d-block py-3">14/05/2020</td>
            <td className="body-2 text-gray-500 d-block py-3">14/05/2020</td>
            <td className="body-2 text-light d-block py-3 flex-grow-1 m-0">
              <span className="bg-alert-error py-1 px-3 rounded-1 overline-2 fw-600">
                Reprovado
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default VacarionTableDatas;
