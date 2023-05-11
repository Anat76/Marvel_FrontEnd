import logo from "../img/logo_marvel.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <div>
        <h3>Personnages</h3>
        <h3>Comics</h3>
        <h3>Favoris</h3>
      </div>
    </header>
  );
};

export default Header;
