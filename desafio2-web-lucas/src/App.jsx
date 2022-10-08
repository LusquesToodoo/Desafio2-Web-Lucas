import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import Components from "./pages/Components";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import InputIcon from "./components/InputIcon";

const App = () => {
  return (
    <>
      <div className="w-25">
        <Router>
          <Routes>
            <Route path="/components" element={<Components />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};
export default App;
