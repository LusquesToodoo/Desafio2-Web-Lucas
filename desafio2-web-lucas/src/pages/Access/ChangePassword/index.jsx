import AccessContainer from "../AccessContainer";
import HeaderChangePassword from "./HeaderChangePassword";
import MainChangePassword from "./MainChangePassword";

const ChangePassword = ({ page = "page-forgot-password" }) => {
  return (
    <AccessContainer
      header={<HeaderChangePassword />}
      main={<MainChangePassword />}
    />
  );
};
export default ChangePassword;
