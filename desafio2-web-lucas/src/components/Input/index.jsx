import "./style.scss";

const Input = ({
  children,
  className = "text-gray-500",
  disabled,
  required,
  txtClue,
  txtInputClass = "",
  txtLabel = "Label",
  txtPlaceholder = "Placeholder",
  txtType = "text",
  updateInput,
  value = "",
}) => {
  return (
    <label className={`input-label body-2 w-100 ${className}`}>
      <p className="mb-2">{txtLabel}</p>
      <input
        className={`input p-3 w-100 ${txtInputClass} ${children ? "pe-5" : ""}`}
        disabled={disabled}
        onChange={(e) => updateInput(e.target.value)}
        placeholder={txtPlaceholder}
        required={required}
        type={txtType}
        value={value}
      />
      <p className="clue caption fw-500 text-gray-400 my-1">{txtClue}</p>
      <figure className="input-icon m-0">{children}</figure>
    </label>
  );
};
export default Input;
