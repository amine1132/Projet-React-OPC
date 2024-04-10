import "./Host.css";
import Stars from "../Stars";

const Host = ({ rating, firstName, lastName, picture }) => {
  return (
    <div className="housing-host">
      <div className="host-info">
        <div className="host-name">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <img className="host-img" src={picture} alt="host" />
      </div>
      <div className="host-rating">
        <Stars rating={rating} />
      </div>
    </div>
  );
};

export default Host;
