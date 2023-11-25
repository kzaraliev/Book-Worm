import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./BookDetails.module.css";
import * as bookService from "../../../services/bookService";
import * as commentService from "../../../services/commentService";
import reducer from "./commentReducer";
import AuthContext from "../../../context/authContext";

import Figure from "react-bootstrap/Figure";
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

  console.log(comments);

  return (
    <div className={styles.container}>
      <Figure.Image
        width={300}
        height={180}
        alt="171x180"
        src={book.imageUrl}
      />

      <div className={styles.bookDetails}>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>Published on: {book.year}</p>
        <p>Genre: {book.genre}</p>
        <p>Description: {book.description}</p>
        <div>
          <FaHeart />
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
