import colorIcon from "../assets/images/colored-rating-icon.svg";
import transparentIcon from "../assets/images/transparent-rating-icon.svg";

// creation array de 5 elements de valeurs undefined
const starArray = Array(5).fill();

const FilledStar = () => <img src={colorIcon} className="rating-icon" alt="filled-star" />;

const EmptyStar = () => <img src={transparentIcon} className="rating-icon" alt="empty-star" />;

const Star = ({ index, rating }) =>
  index < rating ? <FilledStar key={index} /> : <EmptyStar key={index} />;

export default function Stars({ rating }) {
  return starArray.map((_, index) => <Star key={index} index={index} rating={rating} />);
}
