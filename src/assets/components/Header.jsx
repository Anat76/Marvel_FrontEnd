import logo from "../img/logo_marvel.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>

      <div>
        <Link to={"/"}>
          <p>Characters</p>
        </Link>
        <Link to={"/comics"}>
          <p>Comics</p>
        </Link>
        <Link to={"/favoris"}>
          <p>Favoris</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
