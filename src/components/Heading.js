import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <header className="heading">
      <h1 className="bold-text">
        This is a place <br /> to write, read and <br /> connect.
      </h1>
      <p className="p-text">
        It's easy and free to post on any topic and <br /> connect with millions
        of readers.
      </p>
      <div className="header-button-section">
        <Link to="/create"><button className="header-btn">Start Writting</button></Link>
      </div>
    </header>
  );
};

export default Heading;
