import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import InputPassword from "../../../../components/InputPassword";
import Modal from "../../../../components/Modal";

const FormLogin = () => {
  const [email, setEmail] = useState("marcos.santos@toodoo.com.br");
  const [password, setPassword] = useState("abelha@12345");
  const [modalTitle, setModalTitle] = useState(undefined);
  const [modalText, setModalText] = useState(undefined);
  const [statusModal, setStatusModal] = useState("d-none");
  const navigate = useNavigate();

  const validateLogin = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    setStatusModal("d-none");

    await axios
      .post("https://erm-api.azurewebsites.net/Account/login", user)
      .then((response) => {
        navigate("/components");
        const modalBackdrop = document.querySelector(".modal-backdrop.show");
        const rememberPassword =
          document.querySelector("#remember-password").checked;
        modalBackdrop.parentNode.removeChild(modalBackdrop);
        setTimeout(() => {
          const modal = document.querySelectorAll(".modal.d-none");
          modal.forEach((element) => {
            element.parentNode.removeChild(element);
          });
        }, 100);

        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        rememberPassword
          ? localStorage.setItem("token", response.data)
          : sessionStorage.setItem("token", response.data);
      })
      .catch((error) => {
        setStatusModal("error");
        setModalTitle(`Error ${error.response.data.status}`);
        setModalText(`${error.response.data.title}`);
      });
    // setEmail("");
    // setPassword("");
  };

  const validateInputs = () => {
    if (!email || !password) {
      setStatusModal("error");
      setModalTitle("Campo vazio");
      setModalText("Para prosseguir preencha todos os campos obrigatórios.");
      return;
    }
  };

  return (
    <form className="" action="" onSubmit={validateLogin}>
      <div className="mb-2">
        <Input
          required
          txtClue="Informe seu endereço de email"
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
                  : "svg/modalForgotPassword.svg"
              }
              statusModal={statusModal}
              titleModal={modalTitle}
              txtModal={modalText}
              // txtButton={"pode crê"} // sem esse atributo o botão não existe.
            />
          }
        />
      </div>
    </form>
  );
};
export default FormLogin;
