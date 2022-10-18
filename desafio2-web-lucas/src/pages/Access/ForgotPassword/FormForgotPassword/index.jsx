import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Modal from "../../../../components/Modal";
import { useState } from "react";
import axios from "axios";

const FormForgotPassword = () => {
  const [email, setEmail] = useState("marcos.santos@toodoo.com.brk");
  const [href, setHref] = useState("");
  const [modalText, setModalText] = useState(undefined);
  const [modalTitle, setModalTitle] = useState(undefined);
  const [statusLoading, setStatusLoading] = useState("");
  const [statusModal, setStatusModal] = useState("d-none");

  const validadeEmail = async () => {
    setStatusLoading("");
    setStatusModal("d-none");
    const user = {
      email: email,
    };

    await axios
      .post("https://erm-api.azurewebsites.net/Account/forgotpassword", user)
      .then((response) => {
        setHref("/change-password");
        setModalText(
          "Enviamos um email com instruções para redefinir sua senha.",
        );
        setModalTitle("Verifique sua caixa de entrada");
        setStatusLoading("d-none");
        setStatusModal("");
      })
      .catch((error) => {
        setModalTitle(`Error ${error.response.status}`);
        setModalText(`${error.response.statusText}`);
        setModalText(
          error.response.status === 400
            ? "E-mail não encontrado"
            : error.response.statusText,
        );
        setStatusLoading("d-none");
        setStatusModal("error");
      });
  };

  return (
    <form className="" action="">
      <div className="mb-2">
        <Input
          className="text-gray-400"
          required
          txtClue="Informe seu endereço de email"
          txtLabel="Email*"
          txtPlaceholder="ex. johndoe@toodoo.com.br"
          txtType="email"
          updateInput={(email) => setEmail(email)}
          value={email}
        />
      </div>
      <div className="mt-2">
        <Button
          className="button-gray mt-4"
          dataBsTarget="#email-sent"
          modal={
            <Modal
              alt="mensagem enviada"
              dataBsTarget="email-sent"
              href={href}
              src={
                statusModal
                  ? `svg/modal-status-${statusModal}.svg`
                  : "svg/emailSent.svg"
              }
              statusModal={statusModal}
              statusLoading={statusLoading}
              titleModal={modalTitle}
              txtModal={modalText}
            />
          }
          txtButton="Enviar"
          onClick={validadeEmail}
        />
      </div>
    </form>
  );
};
export default FormForgotPassword;
