import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { CreateFormKeys } from "../../utils/constants";
import Path from "../../paths";
import { createBookValidation } from "./createBookValidation";
import * as bookService from "../../services/bookService";
import styles from "../../styles/FormStyles.module.css";
import AuthContext from "../../context/authContext";

import Form from "react-bootstrap/Form";

const initialValues = {
  [CreateFormKeys.Title]: "",
  [CreateFormKeys.Author]: "",
  [CreateFormKeys.Year]: "",
  [CreateFormKeys.Genre]: "",
  [CreateFormKeys.Description]: "",
  [CreateFormKeys.ImageUrl]: "",
};

export default function CreateBook() {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: createBookValidation,
    onSubmit,
  });

  async function onSubmit() {
    try {
      await bookService.create(values);

      navigate(Path.Books);
    } catch (error) {
      if (error.code === 401) {
        resetForm();

        logoutHandler();

        navigate(Path.Login);
      }
    }
  }

  return (
    <div className={styles.containerForm}>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Create Book</h1>

        <Form.Group className="mb-3">
          {errors[CreateFormKeys.Title] && touched[CreateFormKeys.Title] && (
            <p className={styles.invalid}>{errors[CreateFormKeys.Title]}</p>
          )}
          <Form.Label htmlFor={CreateFormKeys.Title}>Book Title</Form.Label>
          <Form.Control
            type="text"
            id={CreateFormKeys.Title}
            name={CreateFormKeys.Title}
            placeholder="Enter book title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[CreateFormKeys.Title]}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {errors[CreateFormKeys.Author] && touched[CreateFormKeys.Author] && (
            <p className={styles.invalid}>{errors[CreateFormKeys.Author]}</p>
          )}
          <Form.Label htmlFor={CreateFormKeys.Author}>Author</Form.Label>
          <Form.Control
            type="text"
            id={CreateFormKeys.Author}
            name={CreateFormKeys.Author}
            placeholder="Enter author"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[CreateFormKeys.Author]}
          />
        </Form.Group>

        <div className={styles.yearAndGenre}>
          <Form.Group className="mb-3" style={{ width: "45%" }}>
            {errors[CreateFormKeys.Year] && touched[CreateFormKeys.Year] && (
              <p className={styles.invalid}>{errors[CreateFormKeys.Year]}</p>
            )}
            <Form.Label htmlFor={CreateFormKeys.Year}>Published on</Form.Label>
            <Form.Control
              type="number"
              id={CreateFormKeys.Year}
              name={CreateFormKeys.Year}
              placeholder="Enter year of publication"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[CreateFormKeys.Year]}
            />
          </Form.Group>

          <Form.Group className="mb-3" style={{ width: "50%" }}>
            {errors[CreateFormKeys.Genre] && touched[CreateFormKeys.Genre] && (
              <p className={styles.invalid}>{errors[CreateFormKeys.Genre]}</p>
            )}
            <Form.Label htmlFor={CreateFormKeys.Genre}>Genre</Form.Label>
            <Form.Control
              type="text"
              id={CreateFormKeys.Genre}
              name={CreateFormKeys.Genre}
              placeholder="Enter genre"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[CreateFormKeys.Genre]}
            />
          </Form.Group>
        </div>

        <Form.Group className="mb-3">
          {errors[CreateFormKeys.Description] &&
            touched[CreateFormKeys.Description] && (
              <p className={styles.invalid}>
                {errors[CreateFormKeys.Description]}
              </p>
            )}
          <Form.Label htmlFor={CreateFormKeys.Description}>
            Description
          </Form.Label>
          <Form.Control
            className={styles.textArea}
            as="textarea"
            rows={3}
            type="text"
            id={CreateFormKeys.Description}
            name={CreateFormKeys.Description}
            placeholder="Enter description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[CreateFormKeys.Description]}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {errors[CreateFormKeys.ImageUrl] &&
            touched[CreateFormKeys.ImageUrl] && (
              <p className={styles.invalid}>
                {errors[CreateFormKeys.ImageUrl]}
              </p>
            )}
          <Form.Label htmlFor={CreateFormKeys.ImageUrl}>Book image</Form.Label>
          <Form.Control
            type="text"
            id={CreateFormKeys.ImageUrl}
            name={CreateFormKeys.ImageUrl}
            placeholder="Enter image URL"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[CreateFormKeys.ImageUrl]}
          />
        </Form.Group>

        <button
          className={styles.submitButton}
          variant="primary"
          type="submit"
          value="Create Post"
        >
          Create
        </button>
      </Form>
    </div>
  );
}
