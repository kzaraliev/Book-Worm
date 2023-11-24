import { useContext } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

import styles from "./Login.module.css";
import Path from "../../paths";
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForm";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });

  return (
    <div className={styles.loginContainer}>
      <Form className={styles.form} onSubmit={onSubmit}>
        <h1 className={styles.title}>Login</h1>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name={LoginFormKeys.Email}
            placeholder="Enter email"
            onChange={onChange}
            value={values[LoginFormKeys.Email]}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name={LoginFormKeys.Password}
            placeholder="Enter password"
            onChange={onChange}
            value={values[LoginFormKeys.Password]}
          />
        </Form.Group>
        <Link to={Path.Register} className={styles.ref}>
          *Don't have an account?
        </Link>
        <button className={styles.submitButton} variant="primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
}
