import React from "react";
import useFormValidation from "../../../../components/form/useFormValidation";
import styles from "../../../../styles/Home.module.css"

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  message: "",
  hospitialName: "",
};
const VALIDATION_RULES = {
  name: "required|string",
  email: "required|email",
  phone: "required",
  message: "required|string",
  hospitialName: "required|string",
};

const AddRecords = () => {

     const {
       state: value,
       handleChange,
       handleSubmit,
       isSubmitting,
       errors,
       handleBlur,
     } = useFormValidation(INITIAL_STATE, VALIDATION_RULES, AddRecords);
     async function AddRecords() {
       console.log(value);
     }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card_one}>
          <div className={styles.two}>
            <h5>ADD A PATIENT'S RECORD</h5>
            <form action="POST" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Registrar's Name"
                value={value.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className={styles.error}> {errors.name}</p>
              <input
                type="text"
                name="hospitialName"
                id="nameOfHospital"
                placeholder="Name 0f Hospitial"
                value={value.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className={styles.error}> {errors.hospitialName}</p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Registrar's Email"
                value={value.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className={styles.error}> {errors.email}</p>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone"
                value={value.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className={styles.error}>{errors.phone}</p>
              <br />
              <textarea name="message" id="" cols="80" rows="10"></textarea>
              <br />
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submit}
              >
                ADD RECORDS
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecords;