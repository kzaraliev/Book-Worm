import { useContext } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

import styles from "./Register.module.css";
import Path from "../../paths";
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  Picture: "picture",
  Username: "username",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.Username]: "",
    [RegisterFormKeys.Picture]: "",
  });

  return (
    <div className={styles.registerContainer}>
      <Form className={styles.form} onSubmit={onSubmit}>
        <h1 className={styles.title}>Register</h1>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            onChange={onChange}
            values={values[RegisterFormKeys.Username]}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="picture">Profile picture URL</Form.Label>
          <Form.Control
            type="text"
            id="picture"
            name="picture"
            placeholder="Enter picture URL"
            onChange={onChange}
            values={values[RegisterFormKeys.Picture]}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            onChange={onChange}
            values={values[RegisterFormKeys.Email]}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            onChange={onChange}
            values={values[RegisterFormKeys.Password]}
          />
        </Form.Group>
        <Link to={Path.Login} className={styles.ref}>
          *Already have an account?
        </Link>
        <button className={styles.submitButton} variant="primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
}
