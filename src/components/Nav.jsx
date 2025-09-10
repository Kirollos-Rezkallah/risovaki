import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);

  // When menuOpen changes, control visibility
  useEffect(() => {
    if (menuOpen) {
      setShouldRenderMenu(true);
    } else {
      // Delay removal after animation
      const timeout = setTimeout(() => setShouldRenderMenu(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  return (
    <>
      <nav aria-label="Primary navigation">
        <a href="#" aria-label="Go to homepage">
          <Logo />
        </a>

        {/* DESKTOP LINKS */}
        <ul className="desktop-nav">
          <li>
            <a href="#risovaki">Рисоваки</a>
          </li>
          <li>
            <a href="#risovaki-pro">Рисоваки Pro</a>
          </li>
          <li>
            <a href="#3d-models">3D модели</a>
          </li>
          <li>
            <a href="#">Видео</a>
          </li>
          <li>
            <a href="#downloads">Инструкции & Контакты</a>
          </li>
        </ul>

        {/* HAMBURGER ICON */}
        <div className="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {shouldRenderMenu && (
        <div
          className={`mobile-nav ${
            menuOpen ? "active fade-in-right" : "slide-out-right"
          }`}>
          <ul className="desktop-nav">
            <li>
              <a href="#risovaki" onClick={() => setMenuOpen(false)}>
                Рисоваки
              </a>
            </li>
            <li>
              <a href="#risovaki-pro" onClick={() => setMenuOpen(false)}>
                Рисоваки Pro
              </a>
            </li>
            <li>
              <a href="#3d-models" onClick={() => setMenuOpen(false)}>
                3D модели
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Видео
              </a>
            </li>
            <li>
              <a href="#downloads" onClick={() => setMenuOpen(false)}>
                Инструкции & Контакты
              </a>
            </li>
          </ul>
          <div className="mobile-logo mobile-only">
            <Logo />
          </div>
        </div>
      )}
    </>
  );
}
