import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddNews from "./pages/AddNews";
import MyNews from "./pages/MyNews";

function App() {
  return (
    <Router>
      <Navbar />   {/* ← IMPORT HERE */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-news" element={<AddNews />} />
        <Route path="/my-news" element={<MyNews />} />
      </Routes>
    </Router>
  );
}

export default App;
