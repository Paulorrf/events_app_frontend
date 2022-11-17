import React from "react";
import { useEffect } from "react";
import axios from "axios";

const UserForm = ({ setFormsValues }) => {
  useEffect(() => {
    axios.get("http://localhost:5000/getusers").then((resp) => {
      console.log(resp.data);
    });
  }, []);

  const handleCreate = (event) => {
    event.preventDefault();

    setFormsValues((prev) => [
      ...prev,
      {
        name: event.target.nome.value,
        sobrenome: event.target.sobrenome.value,
        cpf: event.target.cpf.value,
        age: event.target.idade.value,
      },
    ]);
  };

  return (
    <div className="">
      <form onSubmit={handleCreate} className="text-black">
        <div>
          <input type="text" name="nome" placeholder="nome" />
        </div>
        <div>
          <input type="text" name="sobrenome" placeholder="sobrenome" />
        </div>
        <div>
          <input type="text" name="cpf" placeholder="cpf" />
        </div>
        <div>
          <input type="text" name="idade" placeholder="idade" />
        </div>

        <button type="submit" className="text-white">
          create user
        </button>
      </form>
    </div>
  );
};

export default UserForm;
