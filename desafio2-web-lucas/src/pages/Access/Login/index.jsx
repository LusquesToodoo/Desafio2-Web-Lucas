import ContainerAccess from "../ContainerAccess";
import HeaderLogin from "./HeaderLogin";
import MainLogin from "./MainLogin";
import "./style.scss";

const Login = () => {
  return (
    <ContainerAccess
      header={<HeaderLogin />}
      main={<MainLogin />}
      page="page-login"
    />
  );
};
export default Login;
