import { useState } from "react";
import "./style.scss";

const InputPassword = ({
  disabled,
  required,
  txtClue = "",
  txtInputClass = "",
  txtLabel = "Label - password",
  txtPlaceholder = "Placeholder",
  updatePassword,
  value = "",
}) => {
  const [type, setType] = useState("password");
  function showPassword(e) {
    type === "password" ? setType("text") : setType("password");
  }

  return (
    <div>
      <label className="input-label body-2 w-100">
        <div>
          <p className="text-gray-500 mb-2">{txtLabel}</p>
          <input
            className={`input p-3 w-100 pe-5 ${txtInputClass}`}
            disabled={disabled}
            onChange={(e) => updatePassword(e.target.value)}
            placeholder={txtPlaceholder}
            required={required}
            type={type}
            value={value}
          />
          <p className="clue caption fw-500 text-gray-400 my-1">{txtClue}</p>
          <label
            className="input-icon eye m-0 d-flex align-items-center justify-content-center"
            onClick={showPassword}
          >
            <img src="./images/svg/showPassword.svg" alt="" />
          </label>
        </div>
      </label>
    </div>
  );
};

export default InputPassword;
