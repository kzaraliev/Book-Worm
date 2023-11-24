import styles from "./Books.module.css";
import { useEffect, useState } from "react";

import * as bookService from "../../services/bookService.js";
import Book from "./Book.jsx";
import Pagination from "./Pagination.jsx";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);

  useEffect(() => {
    bookService
      .getAll()
      .then((result) => {
        setBooks(result);
      })
      .catch((err) => console.log(err));
  }, []);

  //Get books for current page
  const indexOfLastBooks = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBooks - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBooks);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.books}>
      <div className={styles.grid}>
        {currentBooks.map((book) => (
          <Book
            key={book._id}
            id={book._id}
            title={book.title}
            author={book.author}
            imageUrl={book.imageUrl}
            className={styles.item}
          />
        ))}

        {books.length === 0 && <h3 className="no-articles">No books yet</h3>}
      </div>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
      />
    </div>
  );
}
