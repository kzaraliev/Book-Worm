import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "./BookDetails.module.css";
import * as bookService from "../../../services/bookService";
import * as commentService from "../../../services/commentService";
import Path from "../../../paths";
import useForm from "../../../hooks/useForm";
import formDate from "../../../utils/dateUtils";
import reducer from "./commentReducer";
import AuthContext from "../../../context/authContext";

import Figure from "react-bootstrap/Figure";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

export default function BooksDetails({}) {
  const {userId, isAuthenticated, username } = useContext(AuthContext);
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [comments, dispatch] = useReducer(reducer, []);
  const navigate = useNavigate();

  useEffect(() => {
    bookService
      .getOne(id)
      .then(setBook)
      .catch((err) => {
        navigate(Path.Books);
      });
    commentService.getAll(id).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        payload: result,
      });
    });
  }, [id]);

  const addCommentHandler = async (values) => {
    if (values.comment === "") {
      return;
    }
    const newComment = await commentService
      .create(id, values.comment)
      .catch((err) => console.log(err));

    newComment.owner = { username };

    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });
  };

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${book.title}`
    );

    if (hasConfirmed) {
      await bookService.remove(id);

      navigate(Path.Books);
    }
  };

  const initialValues = useMemo(
    () => ({
      comment: "",
    }),
    []
  );
  const { values, onChange, onSubmit } = useForm(
    addCommentHandler,
    initialValues
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Figure.Image
          width={400}
          height={280}
          alt="171x180"
          src={book.imageUrl}
          className={styles.bookImg}
        />
        <div className={styles.bookDetails}>
          <h1 className={styles.bookTitle}>{book.title}</h1>
          <h2 className={styles.bookAuthor}>{book.author}</h2>
          <div className={styles.bookInfo}>
            <p>
              <b>Published on</b>: {book.year}
            </p>
            <p>
              <b>Genre</b>: {book.genre}
            </p>
            <p className={styles.description}>
              <b>Description</b>: {book.description}
            </p>
          </div>
          <div className={styles.commentSection}>
            <ul className={styles.commentBox}>
              {comments.length === 0 ? (
                <h1 className={styles.noComments}>No comments yet</h1>
              ) : (
                comments.map(
                  ({ _id, content, owner: { username }, _createdOn }) => (
                    <li key={_id} className={styles.comment}>
                      <p className={styles.commentText}>{content}</p>
                      <p className={styles.commentData}>
                        {username} {formDate(_createdOn)}
                      </p>
                    </li>
                  )
                )
              )}
            </ul>
            <form className={styles.makeComment} onSubmit={onSubmit}>
              <Form.Control
                className={styles.inputComment}
                name="comment"
                placeholder={
                  isAuthenticated
                    ? "Comment here"
                    : "You need to be logged in to post comments"
                }
                onChange={onChange}
                value={values.comment}
                readOnly={!isAuthenticated}
              />
              <button
                className={styles.submitButton}
                type="submit"
                value="Add Comment"
              >
                Send
              </button>
            </form>
          </div>
          {userId === book._ownerId && (
            <div className={styles.editAndDeleteContainer}>
              <button className={styles.editButton}>
                <Nav.Link as={Link} to={`/books/${id}/edit`}>
                  Edit
                </Nav.Link>
              </button>
              <button
                className={styles.deleteButton}
                onClick={deleteButtonClickHandler}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
