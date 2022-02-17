import "./footer.css";
import { FaLinkedin, FaGithub, FaXing } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright 2022 by Sebastian Prestele</p>
      <ul className="footer__icons">
        <li>
          <FaLinkedin className="footer-icon" />
        </li>
        <li>
          <FaXing className="footer-icon" />
        </li>
        <li>
          <FaGithub className="footer-icon" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
