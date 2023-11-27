import { useContext } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

import styles from "../../styles/FormStyles.module.css";
import Path from "../../paths";
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  ImgURL: "img",
  Username: "username",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.Username]: "",
    [RegisterFormKeys.ImgURL]: "",
  });

  return (
    <div className={styles.containerForm}>
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
          <Form.Label htmlFor="imgURL">Profile image URL</Form.Label>
          <Form.Control
            type="text"
            id="imgURL"
            name="imgURL"
            placeholder="Enter image URL"
            onChange={onChange}
            values={values[RegisterFormKeys.ImgURL]}
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
