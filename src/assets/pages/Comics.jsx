import axios from "axios";
import { useState, useEffect } from "react";
import ComicsCard from "../components/ComicsCard";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comicsData, setComicsData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get("http://localhost:3000/comics");
        console.log(responseData.data);
        setComicsData(responseData.data);
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
      <h1> je suis sur la page du Comic : {comicsData.name} !</h1>
      {comicsData.results.map((comics) => {
        return <ComicsCard key={comics._id} comics={comics} />;
      })}
    </>
  );
};

export default Comics;
