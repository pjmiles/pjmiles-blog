import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../api/api";
import Loading from "../loading/Loading";
import Comments from "./Comments";

const getComment_url = baseURL + "comment/all_comments/";
const postComment_url = baseURL + "comment";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]); // blog state
  const [selectPost, setSelectPost] = useState(""); // selecting a particular blog post
  const [content, setContent] = useState(""); // state for content of the comment
  const [comments, setComments] = useState([]); //comment state
  const [error, setError] = useState(""); // error message state
  const [isLoaded, setIsLoaded] = useState(false); // loading state

  const getComments = async (id) => {
    try {
      const { data } = await axios.get(getComment_url + id);
      setComments(data.data);
    } catch (e) {
      console.log(e);
      setError("Error fetching comments");
    }
  };

  const handleClick = (id) => {
    setSelectPost(id); // to select a particular post with an id
    getComments(id); // on click it add the comment to the post
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    try {
      await axios.post(postComment_url, { content, post: id });
    } catch (e) {
      console.log(e);
      setError("Error posting comment");
    }
    getComments(id);
    setContent("");
  };

  // fetching blogs from API
  useEffect(() => {
    const getBlog = async () => {
      try {
       const { data } = await axios.get(baseURL)
       setBlogs(data.data)
       setIsLoaded(true)
      } catch (e) {
        console.log(e)
        setError("Error with loading, please try again") 
        setIsLoaded(true)
      }
    }
    getBlog()
  }, []);

  return (
    <div className="blog-container">
       {error && <div className="error-message">{error}</div>}
      <h1 className="blog-header-text">Blog List</h1>
      {isLoaded ? (
        blogs.map((blog) => {
          return (
            <div className="blog-card" key={blog?.id}>
              <h2 className="blog-title">{blog?.title}</h2>
              <div className="blog-content">
                <h3>content</h3> <br />
                {blog?.content}
                <div className="blog-comment" key={blog?.id}>
                  <button
                    className="comment-btn"
                    onClick={() => handleClick(blog.id)}
                  >
                    comments
                  </button>
                </div>
                <div
                  className={`comment ${
                    selectPost === blog.id ? "active" : "not-active"
                  } `}
                >
                  <Comments comments={comments} />
                  <form onSubmit={(e) => handleSubmit(e, blog.id)}>
                    <textarea
                      cols="10"
                      rows="3"
                      className="post-comment"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                    ></textarea>
                    <button className="post-btn">Post</button>
                  </form>
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
