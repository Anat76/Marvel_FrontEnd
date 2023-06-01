import { useState, useEffect } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const CharacterById = ({ setCookie }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [characterIdData, setcharacterIdData] = useState();

  const { id } = useParams();

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
  }, [id]);

  return isLoading ? (
    <div>Loading . . .</div>
  ) : (
    <section className="characterById">
      <main>
        <div>
          <img
            src={
              characterIdData.thumbnail.path +
              "." +
              characterIdData.thumbnail.extension
            }
            alt=""
          />
        </div>
        <div>
          <button
            onClick={() => {
              setCookie(
                Cookies.set("FavoritsCharacter", characterIdData._id, {
                  expires: 7,
                })
              );
            }}
          >
            ⭐️ Ajouter aux Favoris
          </button>
          <h2>{characterIdData.name}</h2>
          <p>{characterIdData.description}</p>
          <h3>Vous pouvez me retrouver sur les Comics suivants :</h3>
          {characterIdData.comics.map((comicId) => {
            // console.log(comicId);
            return (
              <section key={comicId}>
                <Link to={`/comic/${comicId}`}>
                  <button>{comicId}</button>
                </Link>
                {/* je n'ai pas reussi et j'ai butter longtemps dessus a afficher le nom des comics à la place des id sur les buttons */}
              </section>
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default CharacterById;
