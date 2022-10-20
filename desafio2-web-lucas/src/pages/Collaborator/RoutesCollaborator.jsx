import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import CollaboratorHome from "./Home";
import SidebarCollaborator from "./SidebarCollaborator";

const RoutesCollaborator = ({ element }) => {
  const [headerActive, setHeaderActive] = useState("active");
  const menuSpace = () => {
    headerActive ? setHeaderActive("") : setHeaderActive("active");
  };
  return (
    <>
      <header>
        <SidebarCollaborator menuSpace={menuSpace} />
      </header>
      <main className="collaborator-main d-flex">
        <section className={`header-space ${headerActive}`}></section>
        <section className="main-container container w-100">{element}</section>
      </main>
    </>
  );
};
export default RoutesCollaborator;
