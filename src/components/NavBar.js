import React from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


function NavBar() {
  const themeCtx = useContext(ThemeContext);
  const {theme, setTheme} = themeCtx

  console.log(themeCtx);

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark': 'light');
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>

      <button onClick={handleClick}>{theme}</button>
    </nav>
  );
}

export default NavBar;