import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import ForgotPasswordModal from "../ForgotPassword/ForgotPasswordModal";
import InputPassword from "../../../components/InputPassword";

const ChangePassword = ({ page = "page-forgot-password" }) => {
  return (
    <section className={`all-container container-fluid p-0 d-lg-flex ${page}`}>
      <header className="header d-flex align-items-center justify-content-center col-lg-7 p-0">
        {/* Header */}
        <div className="header-container">
          <figure className="w-100">
            <img
              className="w-100"
              src="./images/svg/forgotPasswordIllustration.svg"
              alt="Forgot password"
            />
          </figure>
        </div>
        {/* End Header */}
      </header>
      <main className="main col-lg-5 ps-xl-5">
        {/* Main */}
        <aside className="access-form-container mx-auto ms-xl-5 w-100">
          <figure className="access-logo m-0">
            <img src="./images/png/logo_toodoo.png" alt="Toodoo" />
          </figure>
          <div className="">
            <div>
              <Link
                className="body-1 text-primary-400 mb-1 text-decoration-none"
                to="/"
              >
                <i className="bi bi-arrow-left-short me-2"></i>
                Voltar à pagina de login
              </Link>
              <h2 className="text-gray-700 mb-3 pb-2">
                Confirme sua nova senha
              </h2>
            </div>
            <form className="" action="">
              {/* Inputs */}
              <div className="mb-2">
                <InputPassword
                  required
                  txtClue=""
                  txtLabel="Nova senha"
                  txtPlaceholder="ao menos 8 caracteres"
                />

                <InputPassword
                  required
                  txtClue=""
                  txtLabel="Nova senha"
                  txtPlaceholder="ao menos 8 caracteres"
                />
              </div>
              <p className="caption text-gray-400 mb-4 pb-2">
                Dica: Sua senha deve ter, ao menos, 8 caracteres. Para torná-la
                ainda mais forte, você deve usar caracteres maiúsculos e
                minúsculos, números e símbolos, como: #$@%!&*.
              </p>
              <div className="">
                <Button
                  className="button-gray"
                  dataBsTarget="#forgotPasswordModal"
                  modal={
                    <ForgotPasswordModal dataBsTarget="forgotPasswordModal" />
                  }
                  txtButton="Enviar"
                />
              </div>
            </form>
          </div>
        </aside>
        {/* End Main */}
      </main>
    </section>
  );
};
export default ChangePassword;
