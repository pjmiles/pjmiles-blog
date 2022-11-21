import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import CreateBlog from "./components/CreateBlog";
import Footer from "./components/Footer";
import "./App.css";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <Routes>
        <Route exact path="/" element={<Blogs />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
