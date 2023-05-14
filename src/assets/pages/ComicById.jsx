import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ComicById = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comicIdData, setComicIdData] = useState();

  const { id } = useParams();
  //   console.log(id);

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
    <>
      {comicIdData.thumbnail.path !==
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" &&
        comicIdData.thumbnail.extension === "jpg" && (
          <img
            src={
              comicIdData.thumbnail.path + "." + comicIdData.thumbnail.extension
            }
            alt=""
          />
        )}
      <div>
        <h1>{comicIdData.title}</h1>
        <p>{comicIdData.description}</p>
      </div>
    </>
  );
};
export default ComicById;
