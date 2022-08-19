import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import CreateBlog from "./components/CreateBlog";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Blogs />} />
          <Route path="/create" element={<CreateBlog />}/>
        </Routes>
    </div>
  );
}

export default App;
