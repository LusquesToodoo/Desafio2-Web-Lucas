import "./style.scss";

const Input = () => {
  return (
    <section>
      <label className="body-2 w-100">
        <p className="text-gray-500 mb-2">Label</p>
        <input className="input p-3 w-100 success" type="text" placeholder="praceholder" />
        <p className="clue caption fw-500 text-gray-400 my-1">
          Dica ou erro
        </p>
      </label>
    </section>
  );
};
export default Input;
