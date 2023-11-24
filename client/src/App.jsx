import { Routes, Route } from "react-router-dom";

import Path from "./paths.js";
import { AuthProvider } from "./context/authContext.jsx";

import Footer from "./components/Footer/Footer.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./components/Home/Home.jsx";
import Books from "./components/Books/BooksList.jsx";
import BookDetails from "./components/Books/BookDetails/BookDetails.jsx";
import About from "./components/About/About.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";

function App() {
  return (
    <AuthProvider>
      <div style={{ backgroundColor: "#faf0e6" }}>
        <Navigation />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Books} element={<Books />} />
          <Route path={`${Path.Books}/:id`} element={<BookDetails />} />
          <Route path={Path.About} element={<About />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Register />} />
          {/* <Route path="*" element={<NotFount />} /> */}
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
