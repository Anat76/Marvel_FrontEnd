import axios from "axios";
import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [charactersData, setCharactersData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get(
          "https://site--marvel-backend--c876mslb4blp.code.run/characters"
        );
        // console.log(responseData);
        setCharactersData(responseData.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Please Loading . . .</p>
  ) : (
    <>
      <h1> je suis sur ma page Home !</h1>
      {charactersData.results.map((character) => {
        return <CharacterCard key={character._id} character={character} />;
      })}
      {console.log(charactersData.count / 100)};
    </>
  );
};

export default Characters;
