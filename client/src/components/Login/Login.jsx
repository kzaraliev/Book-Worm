import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import styles from "../../styles/FormStyles.module.css";
import Path from "../../paths";
import AuthContext from "../../context/authContext";
import { LoginFormKeys } from "../../utils/constants";

const initialValues = {
  [LoginFormKeys.Email]: "",
  [LoginFormKeys.Password]: "",
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  const { values, handleSubmit, handleChange, handleBlur, isSubmitting } =
    useFormik({
      initialValues,
      onSubmit,
    });

  const { loginSubmitHandler } = useContext(AuthContext);

  async function onSubmit(values) {
    try {
      await loginSubmitHandler(values);
    } catch (error) {
      setServerError(error.message);
    }
  }

  const passwordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.containerForm}>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Login</h1>
        {serverError && (
          <div>
            <p className={styles.invalid}>{serverError}</p>
          </div>
        )}

        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            type="text"
            id="email"
            name={LoginFormKeys.Email}
            placeholder="Enter email"
            onChange={handleChange}
            value={values[LoginFormKeys.Email]}
            onBlur={handleBlur}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <div className={styles.inputContainer}>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              id="password"
              name={LoginFormKeys.Password}
              placeholder="Enter password"
              onChange={handleChange}
              value={values[LoginFormKeys.Password]}
            />
            <div
              className={styles.showPassword}
              onClick={passwordVisibilityToggle}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </Form.Group>
        <Link to={Path.Register} className={styles.ref}>
          *Don't have an account?
        </Link>
        <button
          className={styles.submitButton}
          variant="primary"
          type="submit"
          disabled={isSubmitting}
        >
          Login
        </button>
      </Form>
    </div>
  );
}
