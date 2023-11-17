import Footer from "./components/Footer/Footer.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./components/Home/Home.jsx";
import Books from "./components/Books/BooksList.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{backgroundColor: "#faf0e6"}}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        {/* <Route path="*" element={<NotFount />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
