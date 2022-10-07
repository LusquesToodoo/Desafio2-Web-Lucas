import "./style.scss";

const Dropdown = ({
  isDisabled,
  optionsList,
  txtClue,
  txtLabel,
  txtPlaceholder,
}) => {
  return (
    <div className="body-2">
      <label className="w-100">
        <p className="text-gray-500 mb-2">{txtLabel}</p>
        <select
          className="input form-select shadow-none body-2 p-3"
          id="inputGroupSelect01"
          isDisabled={isDisabled}
        >
          <option
            className="input-placeholder text-gray-300"
            disabled="disabled"
            selected
          >
            {txtPlaceholder}
          </option>
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
