import "./style.scss";

const Dropdown = ({
  id,
  optionsList,
  txtClue,
  txtLabel = "Label",
  txtPlaceholder = "",
}) => {
  return (
    <div className="body-2">
      <label className="w-100">
        <p className="text-gray-500 mb-2">{txtLabel}</p>
        <select className="input form-select shadow-none body-2 p-3" id={id}>
          {txtPlaceholder ? (
            <option
              className="input-placeholder text-gray-300"
              defaultValue
              value
              disabled="disabled"
            >
              {txtPlaceholder}
            </option>
          ) : (
            ""
          )}

          {optionsList.map((option, i) => {
            return <option key={`dropdown-${option}-${i}`}>{option}</option>;
          })}
        </select>
        <p className="clue caption fw-500 text-gray-400 my-1">{txtClue}</p>
      </label>
    </div>
  );
};
export default Dropdown;
