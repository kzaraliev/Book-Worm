import { useEffect, useState } from "react";
import styles from "./WelcomeHome.module.css"

const api_url = "http://api.quotable.io/random";

export default function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }, []);

  return(
    <div className={styles.quoteContainer}>
        <h2 className={styles.quote}>{quote}</h2>
        <p className={styles.author}>{author}</p>
    </div>
  )
}
