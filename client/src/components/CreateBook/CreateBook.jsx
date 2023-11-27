import { useNavigate } from "react-router-dom";

import Path from "../../paths";
import styles from "../../styles/FormStyles.module.css";
import * as bookService from "../../services/bookService";

import Form from "react-bootstrap/Form";

export default function CreateBook() {
  const navigate = useNavigate();

  const createBookSubmitHandler = async (e) => {
    e.preventDefault();

    const bookData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await bookService.create(bookData);

      navigate(Path.Books);
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };
  return (
    <div className={styles.containerForm}>
      <Form className={styles.form} onSubmit={createBookSubmitHandler}>
        <h1 className={styles.title}>Create Book</h1>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="title">Book Title</Form.Label>
          <Form.Control
            type="text"
            id="title"
            name="title"
            placeholder="Enter book title"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="author">Author</Form.Label>
          <Form.Control
            type="author"
            id="author"
            name="author"
            placeholder="Enter author"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="year">Published on</Form.Label>
          <Form.Control
            type="text"
            id="year"
            name="year"
            placeholder="Enter year of publication"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="genre">Genre</Form.Label>
          <Form.Control
            type="genre"
            id="genre"
            name="genre"
            placeholder="Enter genre"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            className={styles.textArea}
            as="textarea"
            rows={3}
            type="description"
            id="description"
            name="description"
            placeholder="Enter description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="imageUrl">Book image</Form.Label>
          <Form.Control
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Enter image URL"
          />
        </Form.Group>

        <button className={styles.submitButton} variant="primary" type="submit">
          Create
        </button>
      </Form>
    </div>
  );
}
