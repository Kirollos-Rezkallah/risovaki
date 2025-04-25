function App() {
  return (
    <div className="container">
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
          для эффективной 3D-печати. K10 подходит как новичкам, так и опытным
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
      <img src="../public/hero2.png" alt="hero image" />
    </header>
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
