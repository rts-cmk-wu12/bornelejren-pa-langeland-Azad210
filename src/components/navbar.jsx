import { useState } from "react";
import "../style/navbar.scss";
import logo from "/Billeder/logo/logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <nav>
          <a href="/">
        <img className="nav-logo" src={logo} alt="Logo" />
          </a>
          <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={isOpen ? "active" : ""}>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Om os |
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Tilmeld som sponsor |
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Børnelejren takker |
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
