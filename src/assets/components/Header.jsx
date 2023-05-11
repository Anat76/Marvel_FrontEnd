import logo from "../img/logo_marvel.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>

      <div>
        <h3>Personnages</h3>
        <h3>Comics</h3>
        <h3>Favoris</h3>
      </div>
    </header>
  );
};

export default Header;
