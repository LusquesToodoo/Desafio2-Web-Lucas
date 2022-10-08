import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import "./style.scss";

const Home = () => {
  return (
    <section className="all-container container-fluid p-0 d-lg-flex">
      <header className="header d-flex align-items-center justify-content-center col-lg-7 p-0">
        <div className="header-container">
          <figure className="w-100">
            <img
              className="w-100"
              src="./images/svg/home-illustration.svg"
              alt="a"
            />
          </figure>
          <div className="text-center header-info mx-auto mt-5">
            <h3 className="text-primary-500 fw-semibold">
              Gerencie sua empresa em uma única plataforma
            </h3>
            <p className="text-gray-300 body-1">Conheça o Toodoo ERM.</p>
          </div>
        </div>
      </header>
      <main className="main col-lg-5 d-flex flex-column justify-content-center ps-xl-5">
        <aside className="access-form-container mx-auto ms-xl-5 w-100">
          <figure className="access-logo">
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
          <form className="" action="">
            {/* Inputs */}
            <div className="mb-2">
              <Input
                txtClue="Informe seu endereço de email"
                txtLabel="Email*"
                txtPlaceholder="ex. johndoe@toodoo.com.br"
                txtType="email"
              />
            </div>
            <div>
              <InputPassword
                txtClue="Informe sua senha"
                txtLabel="Senha*"
                txtPlaceholder="ao menos 8 caracteres"
              />
            </div>
            {/* others */}
            <div className="d-flex justify-content-between mt-3">
              <div>
                <input
                  className="d-none"
                  id="remember-password"
                  type="checkbox"
                />
                <label
                  className="d-flex align-items-center text-gray-500"
                  htmlFor="remember-password"
                >
                  <span className="remember-box me-2 border border-2 d-inline-block rounded-circle"></span>
                  <p className="m-0 body">Lembrar</p>
                </label>
              </div>
              <div className="">
                <Link
                  to={"/components"}
                  className="text-decoration-none body-2 text-gray-500"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <div className="mt-2 mb-5">
              <Button txtButton="Entrar" className="button-primary mt-4" />
            </div>
            <p className="text-center">
              Precisa de Ajuda?
              <Link
                className="ms-1 text-decoration-none text-primary-400"
                to={"/components"}
              >
                Entre em contato.
              </Link>
            </p>
          </form>
        </aside>
      </main>
    </section>
  );
};
export default Home;
