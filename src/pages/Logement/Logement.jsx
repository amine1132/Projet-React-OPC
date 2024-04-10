import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Host from "../../components/Host/Host";
import Slideshow from "../../components/Slideshow/Slideshow";
import Tags from "../../components/Tags/Tags";
import ItemsData from "../../data/data.json";
import "./Logement.css";

const Logement = () => {
  const { id } = useParams(); /* Récupérer l'ID de l'article depuis l'URL */
  const navigate = useNavigate();
  const housing = ItemsData.find((item) => item.id === id);

  useEffect(() => {
    if (!housing) {
      navigate("/404");
      return;
    }
  }, [housing, navigate]);

  // Vu que useEffect est asynchrone, on gere le cas ou il continu a lire le code et donc cherche la suite
  // Barriere de sécurité
  if (!housing) {
    return;
  }

  const {
    pictures,
    rating,
    tags,
    description,
    equipments,
    title,
    location,
    host: { name, picture },
  } = housing;

  const [firstName, lastName] = name.split(" ");

  return (
    <>
      <Header />
      <main className="housing-main">
        <Slideshow images={pictures} />
        <section className="housing-header">
          <div className="housing-info">
            <h1 className="housing-title">{title}</h1>
            <p className="housing-location">{location}</p>
            <Tags tags={tags} />
          </div>
          <Host rating={rating} firstName={firstName} lastName={lastName} picture={picture} />
        </section>
        <section className="housing-collapse">
          <Collapse title="Description">
            <p>{description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul className="equipments-content">
              {equipments.map((equipment, index) => {
                return <li key={index}>{equipment}</li>;
              })}
            </ul>
          </Collapse>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Logement;
