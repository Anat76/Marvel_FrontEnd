// Import utils React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import Pages
import Characters from "./assets/pages/Characters";
import CharacterById from "./assets/pages/CharacterById";
import Comics from "./assets/pages/Comics";

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
        </Routes>
      </Router>
    </>
  );
};

export default App;
