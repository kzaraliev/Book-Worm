import logo from "../../../assets/img/logo.png";
import styles from "./WelcomeHome.module.css";
import Quote from "./Quote";

export default function WelcomeHome() {
  return (
    <div className={styles.welcomeContainer}>
      <h1 className={styles.title}>BOOK WORM</h1>
      <h2 className={styles.subtitle}>Where Words Take Flight and Imagination Finds a Home</h2>
      <img src={logo} className={styles.logo} />
      <Quote />
    </div>
  );
}
