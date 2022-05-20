import React from 'react'
import Registrar from '../../../components/registrar/Registrar'
import AllPatient from "../../../components/allpatient/AllPatient"

const index = () => {
  return (
    <div>
      <Registrar>
        <AllPatient />
      </Registrar>
    </div>
  );
}

export default index