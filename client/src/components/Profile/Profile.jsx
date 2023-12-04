import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../context/authContext";
import * as bookService from "../../services/bookService";
import styles from "./Profile.module.css";
import Path from "../../paths";

export default function Profile() {
  const user = useContext(AuthContext);
  const [userBooks, setUserBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    bookService
      .getUserBooks(user.userId)
      .then(setUserBooks)
      .catch((err) => {
        console.log(err);
      });
  }, [user.userId]);

  //Add styling for the page
  //If the user don't have books scenario
  //Overflowing books container

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={user.imgURL} />
        </div>
        <div className={styles.profileDetails}>
          <p>
            Hey {user.username}! Welcome to Book Worm 🐛, your cozy corner for
            all things books 📚! It's time to transform your profile into a
            literary haven. Share your reviews, swap recommendations, and let
            your bookish personality shine. Bookworm is your stage — enjoy the
            spotlight, {user.username}! Happy reading and reviewing! 📖
          </p>
          {userBooks.length === 0 ? (
            <h1>
              You haven't published a book yet?{" "}
              <Link className={styles.linkStyle} to={Path.CreateBook}>
                Share your favorite ones
              </Link>
            </h1>
          ) : (
            <ul className={styles.booksList}>
              <h1>{user.username}'s books:</h1>
              {userBooks.map((book) => (
                <li key={book._id}>
                  <Link
                    className={styles.books}
                    to={`${Path.Books}/${book._id}`}
                  >
                    "{book.title}" - {book.author}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className={styles.buttonsContainer}>
            <Link to={Path.Logout}>
              <button className={styles.button}>Logout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
