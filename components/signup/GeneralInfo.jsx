import React from "react";
import styles from "../signup/Signup.module.css";

const GeneralInfo = () => {
  return (
    <div className={styles.main}>
      <div className={styles.register_card}>
        <form action="" method="patch">
            <h4>Edit General Info</h4>
          <div>
            <input
              className={styles.form}
              type="name"
              name="name"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              className={styles.form}
              type="name"
              name="name"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              className={styles.form}
              type="tel"
              name="tel"
              placeholder="Phone"
            />
          </div>
          <div>
            <input
              className={styles.form}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className={styles.form}
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className={styles.sign}>
            <button type="submit">
              <h3>Submit Changes</h3>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneralInfo;