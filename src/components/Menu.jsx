export default function Menu() {
    return (
        <nav className= 'navbar'>
        
            <ul className="navbar_links">
                <li className="navbar_item">
                    <a href="/"
                    className="navbar_link">
                        Accueil
                        </a>
                    </li>
                    <li className="navbar_item">
                    <a href="/"
                    className="navbar_link">
                        catégories
                        </a>
                    </li>
                    <li className="navbar_item">
                    <a href="/"
                    className="navbar_link">
                        à propos
                        </a>
                    </li>
                    <li className="navbar_item">
                    <a href="/"
                    className="navbar_link">
                        compte
                        </a>
                    </li>
                    <li className="navbar_item">
                    <a href="/"
                    className="navbar_link">
                        Devenir partenaire
                        </a>
                    </li>
            </ul>
            <button className="navbar_burger">
                <span className="burger-bar"></span>
            </button>
        
        </nav>
    )
}