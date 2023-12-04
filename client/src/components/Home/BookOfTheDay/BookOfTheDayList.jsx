import { useEffect, useState } from "react";
import * as bookService from "../../../services/bookService.js";
import BookOfTheDay from "./BookOfTheDay.jsx";
import styles from "./BookOfTheDayList.module.css";

export default function BookOfTheDayList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookService.getLatest().then((result) => {
      setBooks(result);
    });
  }, []);

  return (
    <div className={styles.mostPopularBooks}>
      <h1 className={styles.title}>Recently added books:</h1>
      <div className={styles.containerBooks}>
        {books.map((book) => (
          <BookOfTheDay key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
}
