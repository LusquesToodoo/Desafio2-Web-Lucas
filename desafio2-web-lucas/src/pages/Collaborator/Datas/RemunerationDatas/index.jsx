import chart from "../image/data-chart.svg";

const RemunerarionDatas = () => {
  return (
    <aside className="data-container-right container p-4 m-0 rounded-1 shadow-sm d-flex flex-column justify-content-between">
      <div>
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
              <i className="bi bi-currency-dollar d-inline-block m-auto fs-5"></i>
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
              <i className="bi bi-currency-dollar d-inline-block m-auto fs-5"></i>
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
              <i className="bi bi-currency-dollar d-inline-block m-auto fs-5"></i>
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
  );
};
export default RemunerarionDatas;
