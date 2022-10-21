import "./style.scss";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
const Team = () => {
  return (
    <section className="w-100 mt-5 main-helpdesk pb-5">
      <h4 className="text-primary-600 mb-5 pb-3">Meu Time</h4>
      <table className="helpdesk-table team-table w-100 shadow-lg">
        <thead className="d-block w-100 pb-2">
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
                iconButton
                className="button-primary body-2 py-2 px-5 border-0"
                dataBsTarget="#modalRequestVacation"
                onClick=""
                txtButton="Exportar lista"
                type="button"
              />
            </td>
          </tr>
          <tr className="bg-primary-500 text-light d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-md-semibold py-3">
              Colaborador
              <span className="vacation-th-icon ms-1">
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </th>
            <th className="d-block body-2-md-semibold py-3">
              Posição
              <span className="vacation-th-icon ms-1">
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </th>
            <th className="d-block body-2-md-semibold py-3">
              Cidade
              <span className="vacation-th-icon ms-1">
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </th>
            <th className="d-block body-2-md-semibold py-3">
              Squad
              <span className="vacation-th-icon ms-1">
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100 py-2">
            <td className="d-flex align-items-center body-2-semibold w-auto">
              <figure className="profile-table-image m-0 me-4 rounded-circle">
                <img
                  className="w-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  alt=""
                />
              </figure>
              <p className="fw-600 m-0">Aline Santesso</p>
            </td>
            <td className="d-flex align-items-center body-2">CSO</td>
            <td className="d-flex align-items-center body-2">São Paulo</td>
            <td className="d-flex align-items-center body-2">AL5</td>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100 py-2">
            <td className="d-flex align-items-center body-2-semibold w-auto">
              <figure className="profile-table-image m-0 me-4 rounded-circle">
                <img
                  className="w-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  alt=""
                />
              </figure>
              <p className="fw-600 m-0">Aline Santesso</p>
            </td>
            <td className="d-flex align-items-center body-2">CSO</td>
            <td className="d-flex align-items-center body-2">São Paulo</td>
            <td className="d-flex align-items-center body-2">AL5</td>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100 py-2">
            <td className="d-flex align-items-center body-2-semibold w-auto">
              <figure className="profile-table-image m-0 me-4 rounded-circle">
                <img
                  className="w-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  alt=""
                />
              </figure>
              <p className="fw-600 m-0">Aline Santesso</p>
            </td>
            <td className="d-flex align-items-center body-2">CSO</td>
            <td className="d-flex align-items-center body-2">São Paulo</td>
            <td className="d-flex align-items-center body-2">AL5</td>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100 py-2">
            <td className="d-flex align-items-center body-2-semibold w-auto">
              <figure className="profile-table-image m-0 me-4 rounded-circle">
                <img
                  className="w-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  alt=""
                />
              </figure>
              <p className="fw-600 m-0">Aline Santesso</p>
            </td>
            <td className="d-flex align-items-center body-2">CSO</td>
            <td className="d-flex align-items-center body-2">São Paulo</td>
            <td className="d-flex align-items-center body-2">AL5</td>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100 py-2">
            <td className="d-flex align-items-center body-2-semibold w-auto">
              <figure className="profile-table-image m-0 me-4 rounded-circle">
                <img
                  className="w-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  alt=""
                />
              </figure>
              <p className="fw-600 m-0">Aline Santesso</p>
            </td>
            <td className="d-flex align-items-center body-2">CSO</td>
            <td className="d-flex align-items-center body-2">São Paulo</td>
            <td className="d-flex align-items-center body-2">AL5</td>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100 py-2">
            <td className="d-flex align-items-center body-2-semibold w-auto">
              <figure className="profile-table-image m-0 me-4 rounded-circle">
                <img
                  className="w-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  alt=""
                />
              </figure>
              <p className="fw-600 m-0">Aline Santesso</p>
            </td>
            <td className="d-flex align-items-center body-2">CSO</td>
            <td className="d-flex align-items-center body-2">São Paulo</td>
            <td className="d-flex align-items-center body-2">AL5</td>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100 py-2">
            <td className="d-flex align-items-center body-2-semibold w-auto">
              <figure className="profile-table-image m-0 me-4 rounded-circle">
                <img
                  className="w-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  alt=""
                />
              </figure>
              <p className="fw-600 m-0">Aline Santesso</p>
            </td>
            <td className="d-flex align-items-center body-2">CSO</td>
            <td className="d-flex align-items-center body-2">São Paulo</td>
            <td className="d-flex align-items-center body-2">AL5</td>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100 py-2">
            <td className="d-flex align-items-center body-2-semibold w-auto">
              <figure className="profile-table-image m-0 me-4 rounded-circle">
                <img
                  className="w-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  alt=""
                />
              </figure>
              <p className="fw-600 m-0">Aline Santesso</p>
            </td>
            <td className="d-flex align-items-center body-2">CSO</td>
            <td className="d-flex align-items-center body-2">São Paulo</td>
            <td className="d-flex align-items-center body-2">AL5</td>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100 py-2">
            <td className="d-flex align-items-center body-2-semibold w-auto">
              <figure className="profile-table-image m-0 me-4 rounded-circle">
                <img
                  className="w-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  alt=""
                />
              </figure>
              <p className="fw-600 m-0">Aline Santesso</p>
            </td>
            <td className="d-flex align-items-center body-2">CSO</td>
            <td className="d-flex align-items-center body-2">São Paulo</td>
            <td className="d-flex align-items-center body-2">AL5</td>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100 py-2">
            <td className="d-flex align-items-center body-2-semibold w-auto">
              <figure className="profile-table-image m-0 me-4 rounded-circle">
                <img
                  className="w-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  alt=""
                />
              </figure>
              <p className="fw-600 m-0">Aline Santesso</p>
            </td>
            <td className="d-flex align-items-center body-2">CSO</td>
            <td className="d-flex align-items-center body-2">São Paulo</td>
            <td className="d-flex align-items-center body-2">AL5</td>
          </tr>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-semibold pb-2"></th>
            <th className="d-block body-2 pb-2"></th>
            <th className="d-block body-2 text-gray-400 d-flex align-items-center  w-auto pb-2">
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
            <th className="d-flex align-items-center justify-content-center gap-4 caption fw-600 pb-2 ">
              <span>1-10 de 35</span>
              <div className="d-flex gap-3 helpdesk-table-btn">
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
export default Team;
