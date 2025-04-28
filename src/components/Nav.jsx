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
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Загрузки</a>
          </li>
          <li>
            <a href="#">Часто задаваемые вопросы</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
