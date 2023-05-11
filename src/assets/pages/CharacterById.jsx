import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharacterById = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characterIdData, setcharacterIdData] = useState();

  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get(
          `http://localhost:3000/character/${id}`
        );
        // console.log(responseData.data);
        setcharacterIdData(responseData.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading . . .</div>
  ) : (
    <>
      <h1>je suis sur la page d'un "character"</h1>
      {characterIdData.comics.map((comics) => {
        return <section key={comics}>{comics}</section>;
      })}
    </>
  );
};

export default CharacterById;
