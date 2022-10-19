import Button from "../../../components/Button";
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
          <div className="vacation-schedule py-4 px-4 shadow-sm rounded-1">
            <div className="d-flex justify-content-between px-2 mb-5">
              <h6>Férias agendadas</h6>
              <span className="vocation-button d-block">
                <Button
                  className="button-primary w-auto"
                  dataBsTarget=""
                  iconButton={false}
                  modal=""
                  onClick={undefined}
                  txtButton="Requisitar mudanças"
                  type="button"
                />
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <p className="overline-2 text-gray-400 text-uppercase mb-2 fw-700">
                  Início previsto
                </p>
                <h2 className="m-0">15 jul. 2021</h2>
              </div>
              <div>
                <p className="overline-2 text-gray-400 text-uppercase mb-2 fw-700">
                  Fim previsto
                </p>
                <h2 className="m-0">30 jul. 2021</h2>
              </div>
            </div>
          </div>
        </section>
        <aside className="home-container-right container p-4 pb-2 mx-0 rounded-1 shadow-sm">
          <h6 className="text-primary-400 mb-4">Remuneração</h6>
          <p className="remuneration-value text-gray-700 fw-700 mb-2">$3.8k</p>
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
        </aside>
      </div>
    </div>
  );
};
export default Datas;
