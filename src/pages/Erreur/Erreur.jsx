import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Erreur.css";

const Erreur = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="error-container">
          <h1 className="error-title">404</h1>
          <p className="error-msg"> Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <div className="back-link">
          <Link to="/" style={{ color: "#ff6060", textDecoration: "none" }}>
            Retourner sur la page d'accueil
          </Link>
        </div>
      </main>
    </>
  );
};

export default Erreur;
