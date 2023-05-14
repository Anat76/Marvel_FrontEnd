// Import utils React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cookies from "js-cookie";

// Import Pages
import Characters from "./assets/pages/Characters";
import CharacterById from "./assets/pages/CharacterById";
import Comics from "./assets/pages/Comics";
import ComicById from "./assets/pages/ComicById";
import Favoris from "./assets/pages/Favoris";

// Import Components
import Header from "./assets/components/Header";
import { useState } from "react";

const App = () => {
  // COOKIE
  const [cookie, setCookie] = useState({});
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route
            path="/character/:id"
            element={<CharacterById setCookie={setCookie} />}
          />
          <Route path="/comics" element={<Comics />} />
          <Route
            path="/comic/:id"
            element={<ComicById setCookie={setCookie} />}
          />
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
