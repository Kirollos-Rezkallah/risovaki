import { useState } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="fade-in-down delay-1" aria-label="Primary navigation">
        <a
          className="fade-in-left delay-1"
          href="/"
          aria-label="Go to homepage">
          <Logo />
        </a>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={menuOpen ? "active" : ""}>
          <li className="fade-in-up delay-1">
            <a href="#risovaki">Рисоваки</a>
          </li>
          <li className="fade-in-up delay-2">
            <a href="#risovaki-pro">Рисоваки Pro</a>
          </li>
          <li className="fade-in-up delay-3">
            <a href="#downloads">Загрузки</a>
          </li>
          <li className="fade-in-up delay-4">
            <a href="#footer">Контакты</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
