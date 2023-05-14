import axios from "axios";
import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [charactersData, setCharactersData] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get(
          `https://site--marvel-backend--c876mslb4blp.code.run/characters?name=${search}&page=${page}`
        );
        // console.log(responseData);
        setCharactersData(responseData.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, page]);

  return isLoading ? (
    <p>Please Loading . . .</p>
  ) : (
    <section>
      <div className="search">
        <input
          type="text"
          placeholder="Rechercher des Characters ..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      <div className="charactersContainer">
        {charactersData.results.map((character) => {
          return <CharacterCard key={character._id} character={character} />;
        })}
      </div>
      <div className="pagination">
        {page >= 2 && (
          <button
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Page précedente
          </button>
        )}
        {page >= 2 && (
          <button
            onClick={() => {
              setPage(1);
            }}
          >
            Page Principale
          </button>
        )}
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Page suivante
        </button>
      </div>

      {/* {console.log(Math.ceil(charactersData.count / 100))} */}
      {/* <p>{Math.ceil(charactersData.count / 100)}</p> */}
      {/* <button onChange={}></button> */}
    </section>
  );
};

export default Characters;
