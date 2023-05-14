import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ComicById = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comicIdData, setComicIdData] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get(
          `https://site--marvel-backend--c876mslb4blp.code.run/comic/${id}`
        );
        // console.log(responseData.data);
        setComicIdData(responseData.data);
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
    <section className="characterById">
      <main>
        <div>
          {comicIdData.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" &&
            comicIdData.thumbnail.extension === "jpg" && (
              <img
                src={
                  comicIdData.thumbnail.path +
                  "." +
                  comicIdData.thumbnail.extension
                }
                alt=""
              />
            )}
        </div>
        <div>
          <h2>{comicIdData.title}</h2>
          <p>{comicIdData.description}</p>
        </div>
      </main>
    </section>
  );
};
export default ComicById;
