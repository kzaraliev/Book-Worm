import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";

import * as bookService from "../../services/bookService";
import { editBookValidation } from "./editBookValidation.js";
import styles from "../../styles/FormStyles.module.css";
import { EditFormKeys } from "../../utils/constants.js";
import Path from "../../paths";

export default function bookEdit() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [book, setBook] = useState({
    [EditFormKeys.Title]: "",
    [EditFormKeys.Author]: "",
    [EditFormKeys.Year]: "",
    [EditFormKeys.Genre]: "",
    [EditFormKeys.Description]: "",
    [EditFormKeys.ImageUrl]: "",
  });

  useEffect(() => {
    bookService.getOne(bookId).then((result) => {
      setBook(result);
    });
  }, [bookId]);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      [EditFormKeys.Title]: book[EditFormKeys.Title] || "",
      [EditFormKeys.Author]: book[EditFormKeys.Author] || "",
      [EditFormKeys.Year]: book[EditFormKeys.Year] || "",
      [EditFormKeys.Genre]: book[EditFormKeys.Genre] || "",
      [EditFormKeys.Description]: book[EditFormKeys.Description] || "",
      [EditFormKeys.ImageUrl]: book[EditFormKeys.ImageUrl] || "",
    },
    validationSchema: editBookValidation,
    onSubmit,
    enableReinitialize: true,
  });

  // const editBookSubmitHandler = async (e) => {
  //   e.preventDefault();

  //   const values = Object.fromEntries(new FormData(e.currentTarget));

  //   try {
  //     await bookService.edit(bookId, values);

  //     navigate("/books");
  //   } catch (err) {
  //     // Error notification
  //     console.log(err);
  //   }
  // };

  async function onSubmit() {
    try {
      await bookService.edit(bookId, values);

      navigate(Path.Books);
    } catch (error) {
      navigate(Path.Books);
    }
  }

  return (
    <div className={styles.containerForm}>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Edit Book</h1>

        <Form.Group className="mb-3">
          {errors[EditFormKeys.Title] && touched[EditFormKeys.Title] && (
            <p className={styles.invalid}>{errors[EditFormKeys.Title]}</p>
          )}
          <Form.Label htmlFor={EditFormKeys.Title}>Book Title</Form.Label>
          <Form.Control
            type="text"
            id={EditFormKeys.Title}
            name={EditFormKeys.Title}
            placeholder="Enter book title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[EditFormKeys.Title]}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {errors[EditFormKeys.Author] && touched[EditFormKeys.Author] && (
            <p className={styles.invalid}>{errors[EditFormKeys.Author]}</p>
          )}
          <Form.Label htmlFor={EditFormKeys.Author}>Author</Form.Label>
          <Form.Control
            type="text"
            id={EditFormKeys.Author}
            name={EditFormKeys.Author}
            placeholder="Enter author"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[EditFormKeys.Author]}
          />
        </Form.Group>

        <div className={styles.yearAndGenre}>
          <Form.Group className="mb-3" style={{ width: "45%" }}>
            {errors[EditFormKeys.Year] && touched[EditFormKeys.Year] && (
              <p className={styles.invalid}>{errors[EditFormKeys.Year]}</p>
            )}
            <Form.Label htmlFor={EditFormKeys.Year}>Published on</Form.Label>
            <Form.Control
              type="number"
              id={EditFormKeys.Year}
              name={EditFormKeys.Year}
              placeholder="Enter year of publication"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[EditFormKeys.Year]}
            />
          </Form.Group>

          <Form.Group className="mb-3" style={{ width: "50%" }}>
            {errors[EditFormKeys.Genre] && touched[EditFormKeys.Genre] && (
              <p className={styles.invalid}>{errors[EditFormKeys.Genre]}</p>
            )}
            <Form.Label htmlFor={EditFormKeys.Genre}>Genre</Form.Label>
            <Form.Control
              type="text"
              id={EditFormKeys.Genre}
              name={EditFormKeys.Genre}
              placeholder="Enter genre"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[EditFormKeys.Genre]}
            />
          </Form.Group>
        </div>

        <Form.Group className="mb-3">
          {errors[EditFormKeys.Description] &&
            touched[EditFormKeys.Description] && (
              <p className={styles.invalid}>
                {errors[EditFormKeys.Description]}
              </p>
            )}
          <Form.Label htmlFor={EditFormKeys.Description}>
            Description
          </Form.Label>
          <Form.Control
            className={styles.textArea}
            as="textarea"
            rows={3}
            type="text"
            id={EditFormKeys.Description}
            name={EditFormKeys.Description}
            placeholder="Enter description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[EditFormKeys.Description]}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {errors[EditFormKeys.ImageUrl] && touched[EditFormKeys.ImageUrl] && (
            <p className={styles.invalid}>{errors[EditFormKeys.ImageUrl]}</p>
          )}
          <Form.Label htmlFor={EditFormKeys.ImageUrl}>Book image</Form.Label>
          <Form.Control
            type="text"
            id={EditFormKeys.ImageUrl}
            name={EditFormKeys.ImageUrl}
            placeholder="Enter image URL"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[EditFormKeys.ImageUrl]}
          />
        </Form.Group>

        <button
          className={styles.submitButton}
          variant="primary"
          type="submit"
          value="Edit book"
        >
          Edit
        </button>
      </Form>
    </div>
  );
}
