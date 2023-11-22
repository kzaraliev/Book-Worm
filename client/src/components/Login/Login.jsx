import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import Path from "../../paths";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <Form className={styles.form}>
        <h1 className={styles.title}>Login</h1>
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
        <Link to={Path.Register} className={styles.ref}>*Don't have an account?</Link>
        <button className={styles.submitButton} variant="primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
}
