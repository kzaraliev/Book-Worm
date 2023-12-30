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

export default function BookCreate() {
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
      const { _id } = await bookService.create(values);

      navigate(`${Path.Books}/${_id}`);
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
          {errors[CreateFormKeys.Title] && touched[CreateFormKeys.Title] && (
            <p className={styles.invalid}>{errors[CreateFormKeys.Title]}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
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
          {errors[CreateFormKeys.Author] && touched[CreateFormKeys.Author] && (
            <p className={styles.invalid}>{errors[CreateFormKeys.Author]}</p>
          )}
        </Form.Group>

        <div className={styles.yearAndGenre}>
          <Form.Group className="mb-3" style={{ width: "45%" }}>
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
            {errors[CreateFormKeys.Year] && touched[CreateFormKeys.Year] && (
              <p className={styles.invalid}>{errors[CreateFormKeys.Year]}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" style={{ width: "50%" }}>
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
            {errors[CreateFormKeys.Genre] && touched[CreateFormKeys.Genre] && (
              <p className={styles.invalid}>{errors[CreateFormKeys.Genre]}</p>
            )}
          </Form.Group>
        </div>

        <Form.Group className="mb-3">
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
          {errors[CreateFormKeys.Description] &&
            touched[CreateFormKeys.Description] && (
              <p className={styles.invalid}>
                {errors[CreateFormKeys.Description]}
              </p>
            )}
        </Form.Group>

        <Form.Group className="mb-3">
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
          {errors[CreateFormKeys.ImageUrl] &&
            touched[CreateFormKeys.ImageUrl] && (
              <p className={styles.invalid}>
                {errors[CreateFormKeys.ImageUrl]}
              </p>
            )}
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
