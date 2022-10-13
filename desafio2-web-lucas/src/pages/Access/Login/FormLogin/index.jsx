import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import InputPassword from "../../../../components/InputPassword";

const FormLogin = () => {
  const [email, setEmail] = useState("marcos.santos@toodoo.com.br");
  const [password, setPassword] = useState("abelha@1234");

  const validateLogin = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    let userResponse;
    await axios
      .post("https://erm-api.azurewebsites.net/Account/login", user)
      .then((response) => (userResponse = response))
      .catch((error) => (userResponse = error.response));

    if (userResponse.status === 200) {
      console.log("ok");
    } else {
      console.log("not ok");
    }
    // console.log(userResponse.statusText);
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
        <Button txtButton="Entrar" className="button-gray mt-4" type="submit" />
      </div>
    </form>
  );
};
export default FormLogin;