import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./BookDetails.module.css";
import * as bookService from "../../../services/bookService";
import * as commentService from "../../../services/commentService";
import useForm from "../../../hooks/useForm";
import formDate from "../../../utils/dataUtils";
import reducer from "./commentReducer";
import AuthContext from "../../../context/authContext";

import Figure from "react-bootstrap/Figure";
import Form from "react-bootstrap/Form";
import { FaHeart } from "react-icons/fa";

export default function BooksDetails({}) {
  const { email, userId } = useContext(AuthContext);
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [comments, dispatch] = useReducer(reducer, []);
  const navigate = useNavigate();

  useEffect(() => {
    bookService
      .getOne(id)
      .then(setBook)
      .catch((err) => {
        navigate("/books");
      });
    commentService.getAll(id).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        payload: result,
      });
    });
  }, [id]);

  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(id, values.comment);

    newComment.owner = { email };

    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });
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
            <p>
              <b>Description</b>: {book.description}
            </p>
          </div>
          <p className={styles.addToFav}>
            Add to favorite:
            <button className={styles.likeButton}>
              <FaHeart />
            </button>
          </p>
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
                placeholder="Comment here"
                onChange={onChange}
                value={values.comment}
              />
              <button type="submit" value="Add Comment">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
