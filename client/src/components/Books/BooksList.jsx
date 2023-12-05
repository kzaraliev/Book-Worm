import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LiaSadTear } from "react-icons/lia";

import * as bookService from "../../services/bookService.js";
import Book from "./Book.jsx";
import Pagination from "./Pagination.jsx";
import styles from "./Books.module.css";
import Path from "../../paths.js";

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
    <>
      {books.length === 0 ? (
        <div className={styles.empty}>
          <h3 className={styles.emptyText}>No books yet <LiaSadTear /></h3>
          <Link className={styles.link} to={Path.CreateBook}>*Add your favorites</Link>
        </div>
      ) : (
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
          </div>
          <Pagination
            booksPerPage={booksPerPage}
            totalBooks={books.length}
            paginate={paginate}
          />
        </div>
      )}
    </>
  );
}
