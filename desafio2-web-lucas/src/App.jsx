import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import Components from "./pages/Components";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import InputIcon from "./components/InputIcon";
import Home from "./pages/Access/Home";
import ForgotPassword from "./pages/Access/ForgotPassword";
import ChangePassword from "./pages/Access/ChangePassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/components" element={<Components />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};
export default App;
