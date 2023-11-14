import logo from "../../../assets/img/logo.png";
import styles from "./WelcomeHome.module.css";
import Quote from "./Quote";

export default function WelcomeHome() {
  return (
    <div className={styles.welcomeContainer}>
      <img src={logo} className={styles.logo} />
      <Quote />
    </div>
  );
}
