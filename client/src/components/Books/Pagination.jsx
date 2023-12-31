import styles from "./Books.module.css"

export default function Pagination({ booksPerPage, totalBooks, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination" style={{marginTop: "12px", marginBottom: "32px"}}>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className={styles.pageLink}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
