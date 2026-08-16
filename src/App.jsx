import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

import CreditLending from "./pages/projects/CreditLending";
import Clickbait from "./pages/projects/Clickbait";
import Classdle from "./pages/projects/Classdle";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/work" element={<Work />} />

        <Route
          path="/work/credit-lending"
          element={<CreditLending />}
        />

        <Route
          path="/work/clickbait"
          element={<Clickbait />}
        />

        <Route
          path="/work/classdle"
          element={<Classdle />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;