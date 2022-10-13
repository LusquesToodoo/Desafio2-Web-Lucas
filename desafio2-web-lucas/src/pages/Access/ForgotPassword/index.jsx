import "./style.scss";
import AccessContainer from "../AccessContainer";
import HeaderForgotPassword from "./HeaderForgotPassword";
import MainForgotPassword from "./MainForgotPassword";

const ForgotPassword = () => {
  return (
    <>
      <AccessContainer
        header={<HeaderForgotPassword />}
        main={<MainForgotPassword />}
        page="page-forgot-password"
      />
    </>
  );
};
export default ForgotPassword;
