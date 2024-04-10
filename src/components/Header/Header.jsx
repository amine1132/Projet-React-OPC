import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/images/LOGO(1).svg";
import "./Header.css";

const Header = () => {
  const location = useLocation("");

  return (
    <header className="header">
      <img src={Logo} alt="" />
      <ul className="links">
        <NavLink to="/accueil" className={location.pathname === "/accueil" ? "active" : ""}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/apropos" className={location.pathname === "/apropos" ? "active" : ""}>
          <li>A propos</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
