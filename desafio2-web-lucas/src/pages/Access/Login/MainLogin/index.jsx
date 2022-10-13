import { Link } from "react-router-dom";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import InputPassword from "../../../../components/InputPassword";
import FormLogin from "../FormLogin";
import "./Style.scss";

const MainLogin = () => {
  return (
    <aside className="access-form-container mx-auto ms-xl-5 w-100">
      <figure className="access-logo m-0">
        <img src="./images/png/logo_toodoo.png" alt="Toodoo" />
      </figure>
      <div>
        <p className="body-1 text-gray-400 mb-1">Seja bem-vindo!</p>
        <h2 className="text-gray-700 mb-4 pb-2">
          Faça login
          <br />
          na sua conta
        </h2>
      </div>

      <FormLogin />

      <p className="contact text-center text-gray-400">
        Precisa de Ajuda?
        <Link
          className="ms-1 text-decoration-none text-primary-400"
          to={"/contact"}
        >
          Entre em contato.
        </Link>
      </p>
    </aside>
  );
};
export default MainLogin;
