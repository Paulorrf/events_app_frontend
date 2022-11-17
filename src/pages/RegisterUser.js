import axios from "axios";
import { useEffect, useState } from "react";
import AdressForm from "../components/AdressForm";
import UserForm from "../components/UserForm";

function RegisterUser() {
  const [formsValues, setFormsValues] = useState([]);

  useEffect(() => {
    function promiseResolver() {
      axios({
        method: "post",
        url: "http://localhost:5000/saveadress",
        data: formsValues[1],
      }).then((resp) => {
        console.log(resp);

        const newObj = formsValues[0];

        axios({
          method: "post",
          url: "http://localhost:5000/saveuser",
          data: { ...newObj, adress_id: resp.data.id },
        }).then((res) => {
          console.log(res);
        });
      });
    }

    if (formsValues.length === 2) {
      promiseResolver();
    }
  }, [formsValues]);

  return (
    <div className="text-center mt-20">
      <h2>Register</h2>
      <UserForm setFormsValues={setFormsValues} />
      <div className="my-12"></div>
      <AdressForm setFormsValues={setFormsValues} />
    </div>
  );
}

export default RegisterUser;
