import AccessContainer from "../AccessContainer";
import HeaderLogin from "./HeaderLogin";
import MainLogin from "./MainLogin";
import "./style.scss";

const Login = () => {
  return (
    <AccessContainer
      header={<HeaderLogin />}
      main={<MainLogin />}
      page="page-login"
    />
  );
};
export default Login;
