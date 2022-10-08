import "./style.scss";

const Input = ({
  isDisabled,
  txtClue,
  txtInputClass,
  txtLabel = "Label",
  txtPlaceholder = "Placeholder",
  txtType = "text",
  children,
}) => {
  return (
    <div>
      <label className="input-label body-2 w-100">
        <p className="text-gray-500 mb-2">{txtLabel}</p>
        <input
          className={`input p-3 w-100 ${txtInputClass} ${
            children ? "pe-5" : ""
          }`}
          type={txtType}
          placeholder={txtPlaceholder}
          isDisabled={isDisabled}
        />
        <p className="clue caption fw-500 text-gray-400 my-1">{txtClue}</p>
        <figure className="input-icon m-0">{children}</figure>
      </label>
    </div>
  );
};
export default Input;
