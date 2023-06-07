import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ComicCharacterId = ({ comicId }) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios.get(
        `https://site--marvel-backend--c876mslb4blp.code.run/comic/${comicId}`
      );
      setData(result.data);
      setIsLoading(false);
    };
    fetchdata();
  }, [comicId]);

  return isLoading ? (
    <></>
  ) : (
    <section>
      <Link to={`/comic/${comicId}`}>
        <button className="comicId">{data.title}</button>
      </Link>
      {/* je n'ai pas reussi et j'ai butter longtemps dessus a afficher le nom des comics à la place des id sur les buttons */}
    </section>
  );
};
export default ComicCharacterId;
