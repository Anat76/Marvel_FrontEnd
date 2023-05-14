import axios from "axios";
import { useState, useEffect } from "react";
import ComicsCard from "../components/ComicsCard";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comicsData, setComicsData] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get(
          `https://site--marvel-backend--c876mslb4blp.code.run/comics?title=${search}&page=${page}`
        );
        // console.log(responseData.data);
        setComicsData(responseData.data);
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
          placeholder="Rechercher des Comics ..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div className="comicsContainer">
        {comicsData.results.map((comics) => {
          return <ComicsCard key={comics._id} comics={comics} />;
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
        {page === Math.ceil(comicsData.count / 100) ? (
          <></>
        ) : (
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Page suivante
          </button>
        )}
      </div>
    </section>
  );
};

export default Comics;
