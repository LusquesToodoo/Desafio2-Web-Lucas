import "./style.scss";
import ContainerAccess from "../ContainerAccess";
import HeaderForgotPassword from "./HeaderForgotPassword";
import MainForgotPassword from "./MainForgotPassword";

const ForgotPassword = () => {
  return (
    <>
      <ContainerAccess
        header={<HeaderForgotPassword />}
        main={<MainForgotPassword />}
        page="page-forgot-password"
      />
    </>
  );
};
export default ForgotPassword;
