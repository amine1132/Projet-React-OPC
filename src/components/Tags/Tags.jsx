import "./Tags.css";

const Tags = ({ tags }) => {
  return (
    <div className="housing-tags">
      {tags.map((tag, tagIndex) => (
        <p key={tagIndex} className="tag">
          {tag}
        </p>
      ))}
    </div>
  );
};

export default Tags;
