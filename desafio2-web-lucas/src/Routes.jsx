import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Datas from "./pages/Collaborator/Datas";
import ChangePassword from "./pages/Access/ChangePassword";
import Components from "./pages/Components";
import ForgotPassword from "./pages/Access/ForgotPassword";
import Login from "./pages/Access/Login";
import RoutesCollaborator from "./pages/Collaborator/RoutesCollaborator";
import CollaboratorHome from "./pages/Collaborator/Home";
import Helpdesk from "./pages/Collaborator/Helpdesk";
import Team from "./pages/Collaborator/Team";
import Organograma from "./pages/Collaborator/Organograma";
import Profile from "./pages/Collaborator/Profile";

const App = () => {
  const [userInfo, setUserInfo] = useState("");
  const notFound = (
    <div className="text-center text-light bg-alert-error py-5">
      Página não encontrada
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/components" element={<Components />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Routes>
        <Route
          path="/collaborator-home"
          element={<RoutesCollaborator element={<CollaboratorHome />} />}
        />
        <Route
          path="/collaborator-profile"
          element={<RoutesCollaborator element={<Profile />} />}
        />
        <Route
          path="/collaborator-data"
          element={<RoutesCollaborator element={<Datas />} />}
        />
        <Route
          path="/collaborator-team"
          element={<RoutesCollaborator element={<Team />} />}
        />
        <Route
          path="/collaborator-chart"
          element={<RoutesCollaborator element={<Organograma />} />}
        />
        <Route
          path="/collaborator-helpdesk"
          element={<RoutesCollaborator element={<Helpdesk />} />}
        />
      </Routes>
    </Router>
  );
};
export default App;
