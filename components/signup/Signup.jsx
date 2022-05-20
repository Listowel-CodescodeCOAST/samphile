import React from "react";
import Link from "next/link";
import styles from "../signup/Signup.module.css"

const Signup = () => {
  return (
    <div className={styles.main}>
      <div className={styles.register_card}>
        <form action="" method="post">
          <h1>Sigup with Samphile</h1>
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
              <h3>Sign up</h3>
            </button>
          </div>
          <div className={styles.register}>
            <h5></h5>
            <button>
              <Link href="/">
                <h3>Sign in</h3>
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
