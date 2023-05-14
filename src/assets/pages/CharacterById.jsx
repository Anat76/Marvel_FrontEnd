import { useState, useEffect } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
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
          `https://site--marvel-backend--c876mslb4blp.code.run/character/${id}`
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
      <h1>je suis sur la page de : {characterIdData.name}</h1>
      <img
        src={
          characterIdData.thumbnail.path +
          "." +
          characterIdData.thumbnail.extension
        }
        alt=""
      />
      <h2>{characterIdData.name}</h2>
      <p>{characterIdData.description}</p>
      {characterIdData.comics.map((comicId) => {
        // console.log(comicId);
        return (
          <section key={comicId}>
            <Link to={`/comic/${comicId}`}>
              <button>{comicId}</button>
            </Link>
          </section>
        );
      })}
    </>
  );
};

export default CharacterById;
