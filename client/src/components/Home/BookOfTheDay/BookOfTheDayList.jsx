import { useEffect, useState } from "react";
import * as bookService from "../../../services/bookService.js";
import BookOfTheDay from "./BookOfTheDay.jsx";
import styles from "./BookOfTheDayList.module.css";

export default function BookOfTheDayList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookService.getAll().then((result) => {
      result = result.sort((a, b) => b._createdOn - a._createdOn).slice(0, 3);
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
