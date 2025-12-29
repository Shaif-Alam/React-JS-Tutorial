import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
Contact
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
