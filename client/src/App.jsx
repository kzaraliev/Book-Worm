import { Routes, Route } from "react-router-dom";

import Path from "./paths.js";

import Footer from "./components/Footer/Footer.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./components/Home/Home.jsx";
import Books from "./components/Books/BooksList.jsx";
import BookDetails from "./components/Books/BookDetails/BookDetails.jsx";
import About from "./components/About/About.jsx";
import Login from "./components/Login/Login.jsx";

function App() {
  return (
    <div style={{ backgroundColor: "#faf0e6"}}>
      <Navigation />
      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.Books} element={<Books />} />
        <Route path={`${Path.Books}/:id`} element={<BookDetails />} />
        <Route path={Path.About} element={<About />} />
        <Route path={Path.Login} element={<Login/>} />
        {/* <Route path="*" element={<NotFount />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
