import styles from "../addpatient/AddPatient.module.css";
import useFormValidation from "../../components/form/useFormValidation";

const INITIAL_STATE = {
  fullName: "",
  dateOfBirth: "",
  email: "",
  phone: "",
  password: "",
  age: "",
  sex: "",
  address: "",
  houseAddress: "",
  maritalStatus: "",
  bloodType: "",
  medicalHistory: "",
  insuranceInfomation: "",
};
const VALIDATION_RULES = {
  fullName: "required|string",
  dateOfBirth: "required|string",
  email: "required|email",
  phone: "required",
  password: "required|string|min:3>Must be at least 3 characters",
  age: "required|string",
  sex: "required|string",
  address: "required|string",
  houseAddress: "required|string",
  maritalStatus: "required|string",
  bloodType: "required",
  medicalHistory: "required|string",
  insuranceInfomation: "required|string",
};

const AddPatient = () => {
  const {
    state: value,
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
    handleBlur,
  } = useFormValidation(INITIAL_STATE, VALIDATION_RULES, addPatient);
  async function addPatient() {
    console.log(value);
  }
  return (
    <div className={styles.form_overlay}>
      <div className={styles.form_container}>
        <div className={styles.text}>
          <h3>Patient Registration Form</h3>
        </div>
        <form action="POST" onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Full Name"
            value={value.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={styles.error}> {errors.fullName}</p>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            placeholder="Date of Birth"
            value={value.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={styles.error}> {errors.dateOfBirth}</p>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Age"
            value={value.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={styles.error}> {errors.age}</p>
          <input
            type="text"
            name="sex"
            id="sex"
            placeholder="Sex"
            value={value.sex}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={styles.error}> {errors.sex}</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={value.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={styles.error}> {errors.email}</p>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            value={value.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={styles.error}> {errors.address}</p>
          <input
            type="text"
            name="houseAddress"
            id="houseAddress"
            placeholder="House Address"
            value={value.houseAddress}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={styles.error}> {errors.houseAddress}</p>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            value={value.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={styles.error}>{errors.phone}</p>
          <input
            type="text"
            name="maritalStatus"
            id="maritalStatus"
            placeholder="Marital Status"
            value={value.maritalStatus}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={styles.error}>{errors.maritalStatus}</p>
          <input
            type="text"
            name="bloodType"
            id="bloodType"
            placeholder="Blood Type"
            value={value.bloodType}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={styles.error}> {errors.bloodType}</p>
          <input
            type="text"
            name="medicalHistory"
            id="medicalHistory"
            placeholder="Medical History"
            value={value.medicalHistory}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={styles.error}> {errors.medicalHistory}</p>
          <input
            type="text"
            name="insuranceInfomation"
            id="insuranceInfomation"
            placeholder="Insurance Information"
            value={value.insuranceInfomation}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={styles.error}> {errors.insuranceInfomation}</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Id Number"
            value={value.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={styles.error}>{errors.password}</p>
          <div className={styles.submit}>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatient;
