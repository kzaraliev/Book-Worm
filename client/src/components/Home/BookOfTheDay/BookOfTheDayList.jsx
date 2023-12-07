import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as bookService from "../../../services/bookService.js";
import BookOfTheDay from "./BookOfTheDay.jsx";
import styles from "./BookOfTheDayList.module.css";
import Path from "../../../paths.js";

export default function BookOfTheDayList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    bookService
      .getLatest()
      .then((result) => {
        setBooks(result);
      })
      .catch((err) => {
        console.log(err);
        navigate(Path.Logout);
      });
  }, []);

  return (
    <div className={styles.mostPopularBooks}>
      {books.length !== 0 && (
        <h1 className={styles.title}>Recently added books:</h1>
      )}

      <div className={styles.containerBooks}>
        {books.map((book) => (
          <BookOfTheDay key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
}
