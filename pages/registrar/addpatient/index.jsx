import React from "react";
import AddPatient from "../../../components/addpatient/AddPatient";
import Registrar from "../../../components/registrar/Registrar";

const index = () => {
  return (
    <div>
      <Registrar>
        <AddPatient />
      </Registrar>
    </div>
  );
};

export default index;
