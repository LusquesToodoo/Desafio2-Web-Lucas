import AccessContainer from "../AccessContainer";
import HeaderChangePassword from "./HeaderChangePassword";
import MainChangePassword from "./MainChangePassword";

const ChangePassword = () => {
  return (
    <AccessContainer
      header={<HeaderChangePassword />}
      main={<MainChangePassword />}
      page="page-change-password"
    />
  );
};
export default ChangePassword;
