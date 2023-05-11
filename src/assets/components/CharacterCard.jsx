import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    character.thumbnail.path !==
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" &&
    character.thumbnail.extension === "jpg" && (
      <Link to={`/character/${character._id}`}>
        <article key={character._id}>
          <img
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt={character.name}
          />
          <div>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        </article>
      </Link>
    )
  );
};

export default CharacterCard;
