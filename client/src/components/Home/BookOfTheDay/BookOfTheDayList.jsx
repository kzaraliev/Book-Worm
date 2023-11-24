import { useEffect, useState } from "react";
import * as bookService from "../../../services/bookService.js";
import BookOfTheDay from "./BookOfTheDay.jsx";
import styles from "./BookOfTheDayList.module.css";

export default function BookOfTheDayList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookService.getAll().then((result) => {
      result = result.sort((a, b) => b.rating - a.rating).slice(0, 3);
      setBooks(result);
    });
  }, []);

  return (
    <div className={styles.mostPopularBooks}>
      <h1 className={styles.title}>Most popular books:</h1>
      <div className={styles.containerBooks}>
        {books.map((book) => (
          <BookOfTheDay key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
}
