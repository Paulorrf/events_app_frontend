import React from "react";

const AdressForm = ({ setFormsValues }) => {
  const handleCreate = (event) => {
    event.preventDefault();

    setFormsValues((prev) => [
      ...prev,
      {
        bairro: event.target.bairro.value,
        numero: event.target.numero.value,
        complemento: event.target.complemento.value,
        cidade: event.target.cidade.value,
      },
    ]);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleCreate} className="text-black">
          <div>
            <input type="text" name="bairro" placeholder="bairro" />
          </div>
          <div>
            <input type="text" name="numero" placeholder="numero" />
          </div>
          <div>
            <input type="text" name="complemento" placeholder="complemento" />
          </div>
          <div>
            <input type="text" name="cidade" placeholder="cidade" />
          </div>

          <button type="submit" className="text-white">
            create adress
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdressForm;
