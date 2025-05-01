import Logo from "./Logo";

export default function Nav() {
  return (
    <>
      <nav aria-label="Primary navigation">
        <a href="/" aria-label="Go to homepage">
          <Logo />
        </a>
        <ul>
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
