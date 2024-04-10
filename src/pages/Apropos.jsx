import aboutBanner from "../assets/images/aproposIMG.png";
import collapsesData from "../data/collapsesData.json";
import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Apropos = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Banner imageSrc={aboutBanner} text="" className="banner-about" />
        <section className="collapses-container">
          {collapsesData.map((collapse) => (
            <Collapse title={collapse.title} key={collapse.title}>
              <p>{collapse.content}</p>
            </Collapse>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Apropos;
