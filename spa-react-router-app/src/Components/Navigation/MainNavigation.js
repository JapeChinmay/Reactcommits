import { NavLink } from "react-router-dom";
const MainNavigation = () => {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/welcome/Quotes">All Quotes</NavLink>
            </li>
            <li>
              <NavLink to="/welcome/newQuote">New Quotes</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
