import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [MenuBurger, setMenuBurger] = useState(false);

  return (
    <header>
      <nav>
        <div className="allNavbar">
          <img
            src="./src/assets/accueil.png"
            alt="main logo"
            className="main-logo"
          />
          <div className="titleAndList">
            <h1 className="title">Bienvenue sur Assolidaire !</h1>
            <img
              type="button"
              onClick={() => setMenuBurger(!MenuBurger)}
              src="./src/assets/burgerMenu.svg"
              alt="menu burger"
              className="menuBurger"
              height="35"
              width="35"
            />
            <div
              className={`${
                MenuBurger ? "navbar_links_open" : "navbar_links_closed"
              }`}
            >
              <ul className="navbar_links">
                  <NavLink to="/">
                <li>
                    Accueil
                </li>
                  </NavLink>
                  <NavLink to="categories">
                <li>
                    catégories
                </li>
                  </NavLink>
                  <NavLink to="about">
                <li>
                    à propos
                </li>
                  </NavLink>
                  <NavLink to="account">
                <li>
                    compte
                </li>
                  </NavLink>
                  <NavLink to="partner">
                <li>
                    Devenir partenaire
                </li>
                  </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
