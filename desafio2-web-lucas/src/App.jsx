import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import Components from "./pages/Components";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import InputIcon from "./components/InputIcon";
import Login from "./pages/Access/Login";
import ForgotPassword from "./pages/Access/ForgotPassword";
import ChangePassword from "./pages/Access/ChangePassword";
import { useState } from "react";
import CollaboratorHome from "./pages/Collaborator/Home";

const App = () => {
  const [userInfo, setUserInfo] = useState("");
  // Ou você pode armazenar a informação no local storage
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/components" element={<Components />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/collaborator-home" element={<CollaboratorHome />} />
      </Routes>
    </Router>
  );
};
export default App;
