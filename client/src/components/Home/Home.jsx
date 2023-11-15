import styles from "./Home.module.css";
import WelcomeHome from "./WelcomeHome/WelcomeHome.jsx";
import BookOfTheDayList from "./BookOfTheDay/BookOfTheDayList.jsx";

export default function Home() {
  return (
    <div className={styles.home}>
      <WelcomeHome />
      <BookOfTheDayList />
    </div>
  );
}
