import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import Components from "./pages/Components";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import InputIcon from "./components/InputIcon";
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/components" element={<Components />} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
};
export default App;
