import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc"
import { FaHospitalSymbol } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import styles from "../login/Login.module.css";

const Login =() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={styles.login_main}>
      <div className={styles.login_card}>
        <div className={styles.nav_logo}>
          sam<span>PHILE</span>
          <FaHospitalSymbol size={30} />
        </div>
        <h3> Welcome to samPHILE</h3>
        <div className={styles.form}></div>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={styles.form_input}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={styles.form_input}
            />
          </Form.Group>
          <Button
            block
            size="lg"
            type="submit"
            disabled={!validateForm()}
            className={styles.submit}
          >
            <Link href="/registrar">Login</Link>
          </Button>
          <div className={styles.signin}>
            <h6>Sign in with</h6>
            <p>
              <FcGoogle />
            </p>
            <p>Forgot password?</p>
          </div>
          <div className={styles.register}>
            <button>
              <Link href="/signup"> Create new account</Link>
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;