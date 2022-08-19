import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../api/axios";
import Loading from "../loading/Loading";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => setBlogs(res.data.data))
      .catch((err) => console.log(err.message));
      setIsLoaded(true);
  }, []);

  return (
    <div className="blog-container">
      <h1 className="blog-header-text">Blog List</h1>
      {isLoaded ? (
        blogs.map((blog) => {
          return (
            <div className="blog-card" key={blog?.id}>
              <h2 className="blog-title">{blog?.title}</h2>
              <div className="blog-content">
                content <br />
                <div className="blog-comment" key={blog?.id}>
                  <button className="comment-btn"> comments</button>
                </div>
              </div>
              <p className="blog-author">{blog?.name}</p>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Blogs;
