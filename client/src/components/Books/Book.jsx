import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./Books.module.css";

export default function Book({
  _id,
  name,
  author,
  year,
  genre,
  description,
  imageUrl,
}) {
  return (
    <>
      <Card style={{ width: "22rem" }}>
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{ width: "22rem", height: "28rem", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{author}</Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    </>
  );
}
