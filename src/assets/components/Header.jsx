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
          <h3>Characters</h3>
        </Link>
        <Link to={"/comics"}>
          <h3>Comics</h3>
        </Link>
        <Link to={"/favorits"}>
          <h3>Favoris</h3>
        </Link>
      </div>
    </header>
  );
};

export default Header;
