import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Blogs />} />
        </Routes>
    </div>
  );
}

export default App;
