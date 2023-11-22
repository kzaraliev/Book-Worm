import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

import styles from "./Register.module.css";
import Path from "../../paths";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  Picture: "picture",
  Username: "username",
};

export default function Register() {
  return (
    <div className={styles.registerContainer}>
      <Form className={styles.form}>
        <h1 className={styles.title}>Register</h1>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="picture">Profile picture URL</Form.Label>
          <Form.Control
            type="text"
            id="picture"
            name="picture"
            placeholder="Enter picture URL"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
          />
        </Form.Group>
        <Link to={Path.Login} className={styles.ref}>*Already have an account?</Link>
        <button className={styles.submitButton} variant="primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
}
