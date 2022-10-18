import "./style.scss";
import { Link } from "react-router-dom";
import chart from "./images/chart-gray.svg";
import data from "./images/data-gray.svg";
import help from "./images/help-gray.svg";
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
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        Enable body scrolling
      </button>

      <header
        aria-labelledby="offcanvasScrollingLabel"
        className="sidebar-collaborator offcanvas offcanvas-start"
        data-bs-backdrop="false"
        data-bs-scroll="true"
        id="offcanvasScrolling"
        tabIndex="-1"
      >
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

            <li className="collaborator-group ps-4 pe-4">
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
                      to={`${item.suffix}`}
                    >
                      <figure className="home m-0">
                        <img src={item.image} alt="" className={item.title} />
                      </figure>
                      <p className="m-0">{item.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="collaborator-group ps-4 pe-4">
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
        <div>{/* avatar */}</div>
      </header>
    </>
  );
};
export default Sidebar;
