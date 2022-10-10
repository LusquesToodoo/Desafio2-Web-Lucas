import "./style.scss";
import AccessContainer from "../components/AccessContainer";
import ForgotPasswordHeader from "./ForgotPasswordHeader";
import ForgotPasswordMain from "./ForgotPasswordMain";

const ForgotPassword = () => {
  return (
    <>
      <AccessContainer
        header={<ForgotPasswordHeader />}
        main={<ForgotPasswordMain />}
        page="page-forgot-password"
      />
    </>
  );
};
export default ForgotPassword;
