import ContainerAccess from "../ContainerAccess";
import HeaderChangePassword from "./HeaderChangePassword";
import MainChangePassword from "./MainChangePassword";

const ChangePassword = () => {
  return (
    <ContainerAccess
      header={<HeaderChangePassword />}
      main={<MainChangePassword />}
      page="page-change-password"
    />
  );
};
export default ChangePassword;
