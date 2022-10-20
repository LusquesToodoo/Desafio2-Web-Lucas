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
        <section className="home-container-left w-100">
          <div className="data-vacation shadow-lg mb-4">oie</div>
          <div className="data-benefits shadow-sm rounded-1">
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
