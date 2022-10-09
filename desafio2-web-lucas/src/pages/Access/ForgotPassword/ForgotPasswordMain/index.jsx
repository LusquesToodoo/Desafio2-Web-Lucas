import { Link } from "react-router-dom";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";

const ForgotPasswordMain = () => {
  return (
    <aside className="access-form-container mx-auto ms-xl-5 w-100">
      <figure className="access-logo m-0">
        <img src="./images/png/logo_toodoo.png" alt="Toodoo" />
      </figure>
      <div>
        <Link
          className="body-1 text-primary-400 mb-1 text-decoration-none"
          to="/"
        >
          <i className="bi bi-arrow-left-short me-2"></i>
          Voltar à pagina de login
        </Link>
        <h2 className="text-gray-700 mb-3 pb-2">
          Esqueceu <br /> sua senha
        </h2>
        <p className="body-2 text-gray-400 mb-4 pb-2">
          Entre abaixo com o seu e-mail
          <br />
          para receber o link de confirmação.
        </p>
      </div>
      <form className="" action="">
        {/* Inputs */}
        <div className="mb-2">
          <Input
            className="text-gray-400"
            required
            txtClue="Informe seu endereço de email"
            txtLabel="Email*"
            txtPlaceholder="ex. johndoe@toodoo.com.br"
            txtType="email"
          />
        </div>
        <div className="mt-2">
          <Button txtButton="Enviar" className="button-gray mt-4" />
        </div>
      </form>
    </aside>
  );
};
export default ForgotPasswordMain;
