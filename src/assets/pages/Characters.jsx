import axios from "axios";
import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [charactersData, setCharactersData] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get(
          `https://site--marvel-backend--c876mslb4blp.code.run/characters?name=${search}`
        );
        // console.log(responseData);
        setCharactersData(responseData.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Please Loading . . .</p>
  ) : (
    <section className="character">
      <h1> je suis sur ma page Home !</h1>
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

      <div>
        {charactersData.results.map((character) => {
          return <CharacterCard key={character._id} character={character} />;
        })}
      </div>

      {/* {console.log(Math.ceil(charactersData.count / 100))} */}
      {/* <p>{Math.ceil(charactersData.count / 100)}</p> */}
      {/* <button onChange={}></button> */}
    </section>
  );
};

export default Characters;
