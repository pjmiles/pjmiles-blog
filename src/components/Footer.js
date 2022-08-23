import { FaGithub, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <a href="https://github.com/pjmiles" target="_blank" rel="noreferrer">
          <FaGithub className="footer-item github" />
        </a>
        <a
          href="https://web.facebook.com/oluwaponmile.j.adebisi"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF className="footer-item facebook" />
        </a>
        <a
          href="https://www.instagram.com/ponmilejames/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="footer-item instagram" />
        </a>
        <a
          href="https://twitter.com/adebisiponmile"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="footer-item twitter" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
