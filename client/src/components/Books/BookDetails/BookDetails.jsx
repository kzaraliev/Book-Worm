import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./BookDetails.module.css";
import * as bookService from "../../../services/bookService";

export default function BooksDetails({}) {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    bookService
      .getOne(id)
      .then(setBook)
      .catch((err) => {
        navigate("/books");
      });
  }, [id]);

  console.log(book);

  return (
    <>
      <h1>{book.title}</h1>
    </>
  );
}
