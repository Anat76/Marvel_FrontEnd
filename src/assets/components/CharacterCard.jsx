import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <Link to={`/character/${character._id}`}>
      <article key={character._id}>
        <section>
          <div>
            <img
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt={character.name}
            />
          </div>

          <div>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        </section>
      </article>
    </Link>
  );
};

export default CharacterCard;
