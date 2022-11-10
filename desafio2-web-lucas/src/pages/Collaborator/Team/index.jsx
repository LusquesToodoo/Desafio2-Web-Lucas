import "./style.scss";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import API from "../../../components/API";
import { useState } from "react";
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    getTeamList();
  }, []);
  const [nthElements, setNthElements] = useState("10");
  const [showTeamList, setShowTeamList] = useState("");
  const [teamList, setTeamList] = useState("");
  const [teamTable, setTeamTable] = useState("");

  const getTeamList = async () => {
    let teamArray = [];
    const url = `https://erm-api.azurewebsites.net/Employee/${localStorage.getItem(
      "userId",
    )}`;
    const [response] = await API(url);
    const teams = response.data.teams;
    teams.forEach(async (e) => {
      const list = await API(
        "https://erm-api.azurewebsites.net/Team/",
        e.teamId,
      );
      const listData = list[0].data;
      listData.group = true;
      teamArray.push(listData);
      listData.employees.forEach((element) => {
        teamArray.push(element);
      });
    });

    setTimeout(() => {
      let squad = "";
      const adjustName = (value) => {
        const name = value.split(" ");
        return `${name[0] ? name[0] : ""} ${name[1] ? name[1] : ""}`;
      };
      setShowTeamList(
        teamArray.map((employee, i) => {
          if (employee.group) {
            squad = employee.name;
            return;
          }
          return (
            <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100 py-2">
              <td className="d-flex align-items-center body-2-semibold w-auto">
                <figure className="profile-table-image m-0 me-4 rounded-circle">
                  {employee.picture ? (
                    <img className="w-100" src={employee.picture} alt="" />
                  ) : (
                    <div className="d-flex bg-gray-100 w-100 h-100">
                      <i class="bi bi-person-fill m-auto"></i>
                    </div>
                  )}
                </figure>
                <p className="fw-600 m-0">{adjustName(employee.name)}</p>
              </td>
              <td className="d-flex align-items-center body-2">
                {employee.jobTitle}
              </td>
              <td className="d-flex align-items-center body-2">
                {employee.city}
              </td>
              <td className="d-flex align-items-center body-2">{squad}</td>
            </tr>
          );
        }),
      );
    }, 1000);
  };

  const createTeamTable = (list) => {
    setTeamList(list);
    setTeamTable(
      <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100 py-2">
        <td className="d-flex align-items-center body-2-semibold w-auto">
          <figure className="profile-table-image m-0 me-4 rounded-circle">
            <img
              className="w-100"
              src="https://raw.githubusercontent.com/LusquesToodoo/Desafio2-Web-Lucas/main/desafio2-web-lucas/public/images/png/profile.png"
              alt=""
            />
          </figure>
          <p className="fw-600 m-0">Aline Santesso</p>
        </td>
        <td className="d-flex align-items-center body-2">CSO</td>
        <td className="d-flex align-items-center body-2">São Paulo</td>
        <td className="d-flex align-items-center body-2">AL5</td>
      </tr>,
    );
  };

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
        <tbody>{showTeamList}</tbody>
        <tfoot>
          <tr className="text-gray-500 d-flex align-content-center justify-content-between w-100">
            <th className="d-block body-2-semibold pb-2"></th>
            <th className="d-block body-2 pb-2"></th>
            <th className="d-block body-2 text-gray-400 d-flex align-items-center  w-auto pb-2">
              <p className="m-0">Registros por página</p>
              <span className="helpdesk-span-dropdown d-flex align-items-center">
                <Dropdown
                  id="helpdesk-menu-dropdown"
                  optionsList={["10", "25", "50"]}
                  txtLabel=""
                  updateDropdown={(e) => setNthElements(e)}
                  value={nthElements}
                  onChange={() => {
                    alert("olá");
                  }}
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
        </tfoot>
      </table>
    </section>
  );
};
export default Team;
