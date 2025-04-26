import heroImg from "./assets/hero2.png";
import logoUrl from "./assets/logo.svg";

function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="header-text-box">
        <h1>Печатай точно Работай стабильно</h1>
        <p className="header-text">
          Высокая точность, бесшумная работа и простой запуск — всё, что нужно
          для эффективной 3D-печати. K7 подходит как новичкам, так и опытным
          пользователям. Готов к работе сразу из коробки.
        </p>
        <div className="buttons">
          <Button href={"https://www.ozon.ru/"} bgColor={"var(--color-ozon)"}>
            ozon
          </Button>
          <Button
            href={"https://www.wildberries.ru/"}
            bgColor={"var(--color-wildberries)"}>
            wildberries
          </Button>
          <Button
            href={"https://market.yandex.ru/"}
            bgColor={"var(--color-yandex)"}>
            яндекс маркет
          </Button>
        </div>
      </div>
      <img src={heroImg} alt="hero image" />
    </header>
  );
}

function Nav() {
  return (
    <>
      <nav aria-label="Primary navigation">
        <img src={logoUrl} alt="Risovaki logo" className="logo" />
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

function Button({ children, href, bgColor }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={"btn"}
      style={{ backgroundColor: bgColor }}>
      {children}
    </a>
  );
}
export default App;
