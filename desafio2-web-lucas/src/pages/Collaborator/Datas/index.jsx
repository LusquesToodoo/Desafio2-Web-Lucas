import Button from "../../../components/Button";
import chart from "./image/data-chart.svg";
import "./style.scss";
const Datas = () => {
  return (
    <div className="main-content col-11 mt-5 w-100 page-data">
      <div>
        <h4 className="title mb-5 pb-4 text-primary-400">Dados Corporativos</h4>
      </div>
      <div className="d-flex gap-4">
        <section className="data-container-left w-100">
          <div className="data-vacation shadow-lg mb-4">
            <div className="d-flex justify-content-between align-items-center p-4 w-100">
              <h6 className="text-primary-400 m-0">Férias</h6>
              <div>
                <Button
                  className="button-primary body-2 py-2 px-5"
                  dataBsTarget=""
                  modal=""
                  onClick=""
                  txtButton="+ Solicitar férias"
                  type="button"
                />
              </div>
            </div>
            <table className="vacation-table d-block">
              <thead className="d-block px-4 bg-primary w-100">
                <tr className="w-100 d-flex">
                  <th className="body-2-semibold text-light d-block py-3">
                    Início previsto
                    <span className="vacation-th-icon ms-1">
                      <i class="bi bi-caret-down-fill"></i>
                    </span>
                  </th>
                  <th className="body-2-semibold text-light d-block py-3">
                    Retorno previsto
                    <span className="vacation-th-icon ms-1">
                      <i class="bi bi-caret-down-fill"></i>
                    </span>
                  </th>
                  <th className="body-2-semibold text-light d-block py-3 flex-grow-1 m-0">
                    Status
                    <span className="vacation-th-icon ms-1">
                      <i class="bi bi-caret-down-fill"></i>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="d-block px-4">
                <tr className="d-flex">
                  <td className="body-2 text-gray-500 d-block py-3">
                    14/05/2020
                  </td>
                  <td className="body-2 text-gray-500 d-block py-3">
                    14/05/2020
                  </td>
                  <td className="body-2 text-light d-block py-3 flex-grow-1 m-0">
                    <span className="bg-alert-success py-1 px-3 rounded-1 overline-2 fw-600">
                      Aprovado
                    </span>
                  </td>
                </tr>
                <tr className="d-flex">
                  <td className="body-2 text-gray-500 d-block py-3">
                    14/05/2020
                  </td>
                  <td className="body-2 text-gray-500 d-block py-3">
                    14/05/2020
                  </td>
                  <td className="body-2 text-light d-block py-3 flex-grow-1 m-0">
                    <span className="bg-alert-warning-dark py-1 px-3 rounded-1 overline-2 fw-600">
                      Em análise
                    </span>
                  </td>
                </tr>
                <tr className="d-flex">
                  <td className="body-2 text-gray-500 d-block py-3">
                    14/05/2020
                  </td>
                  <td className="body-2 text-gray-500 d-block py-3">
                    14/05/2020
                  </td>
                  <td className="body-2 text-light d-block py-3 flex-grow-1 m-0">
                    <span className="bg-alert-error py-1 px-3 rounded-1 overline-2 fw-600">
                      Reprovado
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="data-benefits p-4 shadow-sm rounded-1">
            <h6 className="text-primary-400 mb-4">Benefícios</h6>
            <ul className="p-0 m-0">
              <li className="d-flex justify-content-between py-2 my-1">
                <p className="body-2 m-0">VR - Vale Refeição</p>
                <p className="body-1-semibold text-primary-500 m-0">R$200,00</p>
              </li>
              <li className="d-flex justify-content-between py-2 my-1">
                <p className="body-2 m-0">VR - Vale Refeição</p>
                <p className="body-1-semibold text-primary-500 m-0">R$200,00</p>
              </li>
              <li className="d-flex justify-content-between py-2 my-1">
                <p className="body-2 m-0">VR - Vale Refeição</p>
                <p className="body-1-semibold text-primary-500 m-0">R$200,00</p>
              </li>
            </ul>
          </div>
        </section>
        <aside className="data-container-right container p-4 mx-0 mb-2 rounded-1 shadow-sm d-flex flex-column justify-content-between">
          <div>
            <h6 className="text-primary-400 mb-4">Remuneração</h6>
            <p className="remuneration-value text-gray-700 fw-700 mb-2">
              $3.8k
            </p>
            <p className="body-2 text-gray-300 mb-4 pb-2">
              <span className="text-primary-400 fw-600">+18% </span>
              desde jun/19
            </p>
            <p className="overline text-uppercase text-primary-400">Timeline</p>
            <ul className="remuneration-list p-0 overflow-hidden">
              <li className="remuneration-list-item d-flex align-items-center h-100">
                <figure className="remuneration-list-image m-0 me-3 bg-primary-500 rounded-circle d-flex text-primary-500">
                  <i class="bi bi-currency-dollar d-inline-block m-auto fs-5"></i>
                </figure>
                <div className="d-flex justify-content-between align-items-center flex-grow-1">
                  <div>
                    <h4 className="text-gray-700 m-0">$2,5k</h4>
                    <p className="caption text-gray-300 m-0 fw-400">$2,5k</p>
                  </div>
                  <p className="caption text-primary-400 m-0">+0%</p>
                </div>
              </li>
              <li className="remuneration-list-item d-flex align-items-center h-100">
                <figure className="remuneration-list-image m-0 me-3 bg-primary-500 rounded-circle d-flex text-primary-500">
                  <i class="bi bi-currency-dollar d-inline-block m-auto fs-5"></i>
                </figure>
                <div className="d-flex justify-content-between align-items-center flex-grow-1">
                  <div>
                    <h4 className="text-gray-700 m-0">$2,5k</h4>
                    <p className="caption text-gray-300 m-0 fw-400">$2,5k</p>
                  </div>
                  <p className="caption text-primary-400 m-0">+0%</p>
                </div>
              </li>
              <li className="remuneration-list-item d-flex align-items-center h-100">
                <figure className="remuneration-list-image m-0 me-3 bg-primary-500 rounded-circle d-flex text-primary-500">
                  <i class="bi bi-currency-dollar d-inline-block m-auto fs-5"></i>
                </figure>
                <div className="d-flex justify-content-between align-items-center flex-grow-1">
                  <div>
                    <h4 className="text-gray-700 m-0">$2,5k</h4>
                    <p className="caption text-gray-300 m-0 fw-400">$2,5k</p>
                  </div>
                  <p className="caption text-primary-400 m-0">+0%</p>
                </div>
              </li>
            </ul>
          </div>
          <figure className="text-center m-0">
            <img src={chart} alt="gráfico" />
          </figure>
        </aside>
      </div>
    </div>
  );
};
export default Datas;
