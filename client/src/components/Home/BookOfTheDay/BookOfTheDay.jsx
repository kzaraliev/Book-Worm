import { FaBookOpen } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import styles from "./BookOfTheDayList.module.css";

export default function BookOfTheDay({
  _id,
  title,
  author,
  year,
  genre,
  description,
  imageUrl,
}) {
  return (
    <div>
      <Card className={styles.beigeBgColor} style={{ width: "24rem" }}>
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{}}
          className={styles.img}
        />
        <Card.Body className={styles.beigeBgColor}>
          <Card.Title>{title}</Card.Title>
          <Card.Text className={styles.cutText}>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className={styles.beigeBgColorList}>
            Author: {author}
          </ListGroup.Item>
          <ListGroup.Item className={styles.beigeBgColorList}>
            Published on: {year}
          </ListGroup.Item>
          <ListGroup.Item className={styles.beigeBgColorList}>
            Genre: {genre}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body
          className={styles.beigeBgColorButton}
          style={{ borderTop: "none !important" }}
        >
          <Link className={styles.button} to={`/books/${_id}`}>
            See more
            <FaBookOpen className={styles.icon} />
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
