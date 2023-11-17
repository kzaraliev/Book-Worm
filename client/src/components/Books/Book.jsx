import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import styles from "./Books.module.css";

export default function Book({ id, title, author, imageUrl }) {
  return (
    <>
      <Card style={{ width: "22rem" }} className={styles.beigeBgColor}>
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{ width: "21.8rem", height: "28rem", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{author}</Card.Text>
          <Button as={Link} to={`/books/${id}`} variant="primary">
            Details
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
