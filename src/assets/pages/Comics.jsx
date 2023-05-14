import axios from "axios";
import { useState, useEffect } from "react";
import ComicsCard from "../components/ComicsCard";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comicsData, setComicsData] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get(
          `https://site--marvel-backend--c876mslb4blp.code.run/comics?title=${search}`
        );
        // console.log(responseData.data);
        setComicsData(responseData.data);
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
    <>
      <h1> je suis sur la page du Comic : {comicsData.name} !</h1>
      <input
        type="text"
        placeholder="Rechercher des Comics ..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {comicsData.results.map((comics) => {
        return <ComicsCard key={comics._id} comics={comics} />;
      })}
    </>
  );
};

export default Comics;
