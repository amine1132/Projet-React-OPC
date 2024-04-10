import Logo from "../../assets/images/LOGO.png";
import "./Footer.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer-container">
      <img src={Logo} alt="Logo" />
      <div className="footer-text">&copy; {currentYear} Kasa. All rights reserved</div>
    </footer>
  );
};

export default Footer;
