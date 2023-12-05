import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LiaSadTear } from "react-icons/lia";
import Dropdown from "react-bootstrap/Dropdown";

import * as bookService from "../../services/bookService.js";
import Book from "./Book.jsx";
import Pagination from "./Pagination.jsx";
import styles from "./Books.module.css";
import Path from "../../paths.js";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);
  const [sortText, setSortText] = useState("");

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

  function selectOrderHandler(eventKey) {
    setBooks(
      [...books].sort((a, b) => {
        if (
          typeof a[eventKey] === "number" &&
          typeof b[eventKey] === "number"
        ) {
          return a[eventKey] - b[eventKey];
        } else if (
          typeof a[eventKey] === "string" &&
          typeof b[eventKey] === "string"
        ) {
          return a[eventKey].localeCompare(b[eventKey]);
        }
      })
    );

    if (eventKey === "year") {
      setSortText("Year of publication");
    } else {
      setSortText(eventKey.charAt(0).toUpperCase() + eventKey.slice(1));
    }
  }

  return (
    <>
      {books.length === 0 ? (
        <div className={styles.empty}>
          <h3 className={styles.emptyText}>
            No books yet <LiaSadTear />
          </h3>
          <Link className={styles.link} to={Path.CreateBook}>
            *Add your favorites
          </Link>
        </div>
      ) : (
        <div className={styles.books}>
          <div className={styles.header}>
            <h1 className={styles.title}>All books:</h1>
            <Dropdown className={styles.dropdown} onSelect={selectOrderHandler}>
              <Dropdown.Toggle id="dropdown-basic">
                {sortText !== "" ? `Order by: ${sortText}` : "Order by"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="title">Title</Dropdown.Item>
                <Dropdown.Item eventKey="author">Author</Dropdown.Item>
                <Dropdown.Item eventKey="year">
                  Year of publication
                </Dropdown.Item>
                <Dropdown.Item eventKey="genre">Genre</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
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
