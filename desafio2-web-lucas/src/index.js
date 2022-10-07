import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import InputIcon from "./components/InputIcon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Input
      isDisabled="false"
      txtClue="dica ou erro"
      txtInputClass=""
      txtLabel="label - default"
      txtPlaceholder="placeholder"
      txtType="text"
    />

    <Input
      isDisabled="true"
      txtClue="dica ou erro"
      txtInputClass=""
      txtLabel="label - disabled"
      txtPlaceholder="placeholder"
      txtType="text"
    />

    <Input
      isDisabled="false"
      txtClue="dica ou erro"
      txtInputClass="error"
      txtLabel="label - error"
      txtPlaceholder="placeholder"
      txtType="text"
    />

    <Input
      isDisabled="false"
      txtClue="dica ou erro"
      txtInputClass="success"
      txtLabel="label - success"
      txtPlaceholder="placeholder"
      txtType="text"
    />
    <Input
      isDisabled="false"
      txtClue="Aqui vamos adicionar o ícone"
      txtInputClass="error"
      txtLabel="label - children"
      txtPlaceholder="placeholder"
      txtType="text"
    >
      <InputIcon src="svg/user-icon.svg" alt="user" />
    </Input>

    <Dropdown
      txtLabel={"Label"}
      txtPlaceholder={"placeholder"}
      optionsList={["a", "b"]}
      txtClue="Dica ou erro do dropdown"
    />

    <Button txtButton="Button"/>
    <Button txtButton="Exportar lista" iconButton/>
  </React.StrictMode>,
);
