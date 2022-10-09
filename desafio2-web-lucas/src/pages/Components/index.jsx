import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import InputIcon from "../../components/InputIcon";
import InputPassword from "../../components/InputPassword";

const Components = () => {
  return (
    <div className="w-25">
      <Input
        txtClue="dica ou erro"
        txtInputClass=""
        txtLabel="label - default"
        txtPlaceholder="placeholder"
        txtType="text"
      />

      <Input
        txtClue="dica ou erro"
        txtInputClass=""
        txtLabel="label - disabled"
        txtPlaceholder="placeholder"
        txtType="text"
      />

      <Input
        txtClue="dica ou erro"
        txtInputClass="error"
        txtLabel="label - error"
        txtPlaceholder="placeholder"
        txtType="text"
      />

      <Input
        txtClue="dica ou erro"
        txtInputClass="success"
        txtLabel="label - success"
        txtPlaceholder="placeholder"
        txtType="text"
      />
      <Input
        txtClue="Aqui vamos adicionar o ícone"
        txtInputClass="error"
        txtLabel="label - children"
        txtPlaceholder="placeholder"
        txtType="text"
      >
        <InputIcon src="svg/user-icon.svg" alt="user" teste="oie" />
      </Input>

      <InputPassword msg="oie" />

      <Dropdown
        txtLabel={"Label"}
        txtPlaceholder={"placeholder"}
        optionsList={["a", "b", "c"]}
        txtClue="Dica ou erro do dropdown"
      />

      <Button txtButton="Button" className="button-primary" />
      <Button txtButton="Button" className="button-outline mt-1" />
      <Button
        txtButton="Exportar lista"
        className="button-gray"
        iconButton
      />
    </div>
  );
};
export default Components;
