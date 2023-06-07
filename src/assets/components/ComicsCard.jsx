import { Link } from "react-router-dom";

const ComicsCard = ({ comics }) => {
  return (
    <Link to={`/comic/${comics._id}`}>
      <article key={comics._id}>
        <section>
          <div>
            <img
              src={comics.thumbnail.path + "." + comics.thumbnail.extension}
              alt={comics.name}
            />
          </div>
          <div>
            <h2>{comics.title}</h2>
            <p>{comics.description}</p>
          </div>
        </section>
      </article>
    </Link>
  );
};

export default ComicsCard;
