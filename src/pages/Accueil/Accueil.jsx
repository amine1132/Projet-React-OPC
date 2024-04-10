import bannerImg from "../../assets/images/IMG.png";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ItemsData from "../../data/data.json";
import Cards from "../../components/Cards/Cards";
import "./Accueil.css";

const Accueil = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Banner imageSrc={bannerImg} text="Chez vous, partout et ailleurs" />
        <section className="cards-container">
          {ItemsData.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Accueil;
