import styles from "./Books.module.css";
import { useEffect, useState } from "react";

import * as bookService from "../../services/bookService.js";
import Book from "./Book.jsx";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookService.getAll().then((result) => setBooks(result));
  }, []);

  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <Book key={book._id} {...book} className={styles.item}/>
      ))}

      {books.length === 0 && <h3 className="no-articles">No books yet</h3>}
    </div>
  );
}
