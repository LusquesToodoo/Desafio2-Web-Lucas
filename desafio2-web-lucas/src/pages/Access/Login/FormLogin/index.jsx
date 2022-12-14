import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import InputPassword from "../../../../components/InputPassword";
import Modal from "../../../../components/Modal";

const FormLogin = () => {
  const [email, setEmail] = useState("marcos.santos@toodoo.com.br");
  const [modalText, setModalText] = useState(undefined);
  const [modalTitle, setModalTitle] = useState(undefined);
  const [password, setPassword] = useState("abelha@1234");
  const [statusLoading, setStatusLoading] = useState("d-none");
  const [statusModal, setStatusModal] = useState("d-none");
  const [validEmail, setValidEmail] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const navigate = useNavigate();

  const validateLogin = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    setStatusLoading("");
    setStatusModal("d-none");

    await axios
      .post("https://erm-api.azurewebsites.net/Account/login", user)
      .then((response) => {
        navigate("/collaborator-home");
        window.location.reload();
        const rememberPassword =
          document.querySelector("#remember-password").checked;

        setTimeout(() => {
          const modalElements = document.querySelectorAll(
            "body > *:not(#root):not(noscript)",
          );
          modalElements.forEach((element) => {
            element.parentNode.removeChild(element);
          });
        }, 500);

        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        localStorage.removeItem("userInfo");
        localStorage.setItem("userId", response.data.id);
        rememberPassword
          ? localStorage.setItem("token", response.data.token)
          : sessionStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        setStatusLoading("d-none");
        setStatusModal("error");
        setModalTitle(`Error ${error.response.data.status}`);
        setModalText(`${error.response.data.title}`);
      });
    setEmail("");
    setPassword("");
  };

  const validateInputs = () => {
    if (!email || !password) {
      setStatusModal("error");
      setModalTitle("Campo vazio");
      setModalText("Para prosseguir preencha todos os campos obrigat??rios.");
      email ? setValidEmail("success") : setValidEmail("error");
      password ? setValidPassword("success") : setValidPassword("error");
      debugger
      return;
    }
  };

  return (
    <form className="" action="" onSubmit={validateLogin}>
      <div className="mb-2">
        <Input
          required
          txtClue="Informe seu endere??o de email"
          txtInputClass={validEmail}
          txtLabel="Email*"
          txtPlaceholder="ex. johndoe@toodoo.com.br"
          txtType="email"
          updateInput={(email) => setEmail(email)}
          value={email}
        />
      </div>
      <div>
        <InputPassword
          required
          txtClue="Informe sua senha"
          txtInputClass={validPassword}
          txtLabel="Senha*"
          txtPlaceholder="ao menos 8 caracteres"
          updatePassword={(password) => setPassword(password)}
          value={password}
        />
      </div>

      <div className="d-flex justify-content-between mt-3">
        <div>
          <input className="d-none" id="remember-password" type="checkbox" />
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
            to={"/forgot-password"}
            className="text-decoration-none body-2 text-gray-500"
          >
            Esqueceu a senha?
          </Link>
        </div>
      </div>
      <div className="mt-2">
        <Button
          className="button-gray mt-4"
          dataBsTarget="#modalForgotPassword"
          txtButton="Entrar"
          type="submit"
          onClick={validateInputs}
          modal={
            <Modal
              alt="Error"
              dataBsTarget="modalForgotPassword"
              href="#"
              src={
                statusModal
                  ? `svg/modal-status-${statusModal}.svg`
                  : "svg/emailSent.svg"
              }
              statusModal={statusModal}
              statusLoading={statusLoading}
              titleModal={modalTitle}
              txtModal={modalText}
              // txtButton={"pode cr??"} // sem esse atributo o bot??o n??o existe.
            />
          }
        />
      </div>
    </form>
  );
};
export default FormLogin;
