import "./Banner.css";

const Banner = ({ imageSrc, text, className }) => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${imageSrc})`,
  };
  return (
    <div className={`banner ${className}`} style={bannerStyle}>
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
