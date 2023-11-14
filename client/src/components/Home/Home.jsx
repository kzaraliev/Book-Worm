import styles from "./Home.module.css";
import WelcomeHome from "./WelcomeHome/WelcomeHome.jsx";

export default function Home() {
  return (
    <div className={styles.home}>
      <WelcomeHome />
    </div>
  );
}
