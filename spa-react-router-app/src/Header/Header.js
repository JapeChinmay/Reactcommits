import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="products">Produts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
