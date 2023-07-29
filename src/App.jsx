import React, { useState } from "react";
import Input from "./Input";
import useForm from "./Hooks/useForm";

const App = () => {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm();

  console.log(cep.value);
  console.log(cep);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log("Enviou");
    } else {
      console.log("Não enviou");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" {...nome} />
      <Input
        label="CEP"
        id="cep"
        type="text"
        {...cep}
        placeholder="00000-000"
      />
      <Input label="EMAIL" id="email" type="email" {...email} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
