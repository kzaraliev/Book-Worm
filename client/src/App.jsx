import Footer from "./components/Footer/Footer.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./components/Home/Home.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFount />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
