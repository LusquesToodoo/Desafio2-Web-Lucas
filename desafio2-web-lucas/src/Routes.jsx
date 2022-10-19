import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ChangePassword from "./pages/Access/ChangePassword";
import Components from "./pages/Components";
import ForgotPassword from "./pages/Access/ForgotPassword";
import Login from "./pages/Access/Login";
import RoutesCollaborator from "./pages/Collaborator/RoutesCollaborator";

const App = () => {
  const [userInfo, setUserInfo] = useState("");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/components" element={<Components />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>

      <RoutesCollaborator />

      <Routes>
        <Route
          path="*"
          element={
            <div className="text-center text-light bg-alert-error py-5">
              Página não encontrada
            </div>
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
