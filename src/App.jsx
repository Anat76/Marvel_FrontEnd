// Import utils React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import Pages
import Characters from "./assets/pages/Characters";
import CharacterById from "./assets/pages/CharacterById";
import Comics from "./assets/pages/Comics";
import ComicById from "./assets/pages/ComicById";

// Import Components
import Header from "./assets/components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterById />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comic/:id" element={<ComicById />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
