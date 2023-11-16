import styles from "./Home.module.css";
import WelcomeHome from "./WelcomeHome/WelcomeHome.jsx";
import BookOfTheDayList from "./BookOfTheDay/BookOfTheDayList.jsx";
import { FaBook } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.home}>
      <WelcomeHome />
      <BookOfTheDayList />
      <button className={styles.moreBooks}>
        <div className={styles.textContainer}>
          <span >More Books</span>
          <FaBook className={styles.moreBooksIcon} />
        </div>
      </button>
    </div>
  );
}
