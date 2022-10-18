import "./style.scss";
import { Link } from "react-router-dom";
import chart from "./images/chart-gray.svg";
import data from "./images/data-gray.svg";
import goOut from "./images/go-out.svg";
import help from "./images/help-gray.svg";
import expand from "./images/Expand.png";
import home from "./images/home-gray.svg";
import menuArrow from "./images/menu-arrow.svg";
import profile from "./images/profile-gray.svg";
import team from "./images/team-gray.svg";
import ToodooLogo from "./images/Toodoo-logo.png";

const collaboratorNavItems = [
  {
    image: profile,
    title: "Perfil",
    suffix: "profile",
  },
  {
    image: team,
    title: "Meu time",
    suffix: "team",
  },
  {
    image: data,
    title: "Dados corposativos",
    suffix: "data",
  },
  {
    image: chart,
    title: "Organograma",
    suffix: "chart",
  },
  {
    image: help,
    title: "Helpdesk",
    suffix: "help",
  },
];
const selectElement = (element, elementClass) => {
  console.log("passei aqui");
  return element.classList.contains(elementClass)
    ? element
    : selectElement(element.parentNode, elementClass);
};

const Sidebar = () => {
  const currentActive = (e) => {
    const lastActive = document.querySelector(".navigation-item.active");
    lastActive.classList.remove("active");
    const currentElement = selectElement(e.target, "navigation-item");
    console.log();
    currentElement.classList.add("active");
  };

  return (
    <>
      <div
      className="button-sidebar"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <figure className="m-0 p-2 border rounded-3">
          <img src={expand} alt="expand" />
        </figure>
      </div>

      <header
        aria-labelledby="offcanvasScrollingLabel"
        className="sidebar-collaborator offcanvas offcanvas-start"
        data-bs-backdrop="false"
        data-bs-scroll="true"
        id="offcanvasScrolling"
        tabIndex="-1"
      >
        <section className="h-100 d-flex flex-column justify-content-between mb-5">
          <div>
            <div className="offcanvas-header p-0 pt-5 ps-4">
              <div className="d-flex align-items-center ps-2">
                <button
                  aria-label="Close expand"
                  className="btn-close p-0 me-4"
                  data-bs-dismiss="offcanvas"
                  type="button"
                ></button>
                <figure className="m-0">
                  <img src={ToodooLogo} alt="Toodoo" />
                </figure>
              </div>
            </div>
            <nav className="sidebar-navigation">
              <ul className="text-sidebar p-0">
                <li
                  className="navigation-item mb-4 ps-4 active"
                  onClick={currentActive}
                >
                  <Link
                    className="text-gray-600 d-flex align-items-center gap-4 text-decoration-none py-3"
                    to="/collaborator-home"
                  >
                    <figure className="home m-0">
                      <img src={home} alt="" className="" />
                    </figure>
                    <p className="m-0">Home</p>
                  </Link>
                </li>

                <li className="collaborator-group ps-4 pe-3">
                  <a
                    aria-controls="collaboratorNavItems"
                    aria-expanded="false"
                    className="
                overline text-gray-400 d-flex
                align-items-center justify-content-between text-decoration-none text-uppercase m-0 py-3 collapsed"
                    data-bs-toggle="collapse"
                    href="#collaboratorNavItems"
                    role="button"
                  >
                    <p className="m-0 text-decoration-none">Colaborador</p>
                    <figure className="home m-0 arrow-top arrow-top">
                      <img src={menuArrow} alt="" className="arrow" />
                    </figure>
                  </a>
                </li>

                <li>
                  <ul className="collapse p-0" id="collaboratorNavItems">
                    {collaboratorNavItems.map((item, i) => (
                      <li
                        className="navigation-item ps-4 py-3"
                        key={`item.suffix-${i}`}
                        onClick={currentActive}
                      >
                        <Link
                          className="text-gray-600 d-flex align-items-center gap-4 text-decoration-none"
                          // to={`${item.suffix}`}
                          to={""}
                        >
                          <figure className="home m-0">
                            <img
                              src={item.image}
                              alt=""
                              className={item.title}
                            />
                          </figure>
                          <p className="m-0">{item.title}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="collaborator-group ps-4 pe-3">
                  <a
                    aria-controls=""
                    aria-expanded="false"
                    className="
                overline text-gray-400 d-flex
                align-items-center justify-content-between text-decoration-none text-uppercase m-0 py-3 collapsed"
                    data-bs-toggle="collapse"
                    role="button"
                  >
                    <p className="m-0 text-decoration-none">Administrativo</p>
                    <figure className="home m-0 arrow-top">
                      <img src={menuArrow} alt="" className="arrow" />
                    </figure>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="list-unstyled ps-4 pe-3">
            <div className="d-flex justify-content-between">
              <div className="user-badge d-flex align-items-center">
                <figure className="user-image rounded-circle overflow-hidden m-0 me-3">
                  foto do perfil
                </figure>
                <div>
                  <p className="caption text-gray-700 m-0">Nome do usuário</p>
                  <p className="caption text-gray-400 m-0">email@email.com</p>
                </div>
              </div>
              <label className="label-go-out">
                <input id="modal-go-out" type="checkbox" className="d-none" />
                <div className="position-relative">
                  <figure className=" fs-3 m-0">
                    <i class="bi bi-three-dots fs-5 me-1"></i>
                  </figure>
                  <div class="modal-go-out text-gray-100 shadow-sm mt-3 d-flex align-content-center">
                    <figure className="m-0">
                      <img src={goOut} alt="go out" />
                    </figure>
                    <p className="body-2 text-gray-700 m-0 mt-1 ms-2">Sair</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};
export default Sidebar;
