import { Link } from "react-router-dom";

const ComicsCard = ({ comics }) => {
  return (
    comics.thumbnail.path !==
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" &&
    comics.thumbnail.extension === "jpg" && (
      <Link to={`/comic/${comics._id}`}>
        <article key={comics._id}>
          <img
            src={comics.thumbnail.path + "." + comics.thumbnail.extension}
            alt={comics.name}
          />
          <h2>{comics.name}</h2>
          <p>{comics.description}</p>
        </article>
      </Link>
    )
  );
};

export default ComicsCard;
