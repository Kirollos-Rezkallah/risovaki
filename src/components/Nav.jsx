import { useState } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav aria-label="Primary navigation">
        <a href="/" aria-label="Go to homepage">
          <Logo />
        </a>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={menuOpen ? "active" : ""}>
          <li>
            <a href="#risovaki">Рисоваки</a>
          </li>
          <li>
            <a href="#risovaki-pro">Рисоваки Pro</a>
          </li>
          <li>
            <a href="#downloads">Загрузки</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
