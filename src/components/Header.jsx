import heroImg from "../assets/hero.png";
import Button from "./Button";

export default function Header() {
  return (
    <header>
      <div className="header-text-box">
        <h1>Печатай точно Работай стабильно</h1>
        <p className="header-text">
          Выберите идеальный <strong>3D-принтер</strong> для своих задач:{" "}
          <strong>Рисоваки</strong> или <strong>Рисоваки Pro</strong>
          <br /> Обе модели созданы для лёгкого старта, стабильной работы и
          высокой точности. Начните печатать с уверенностью и откройте новые
          возможности творчества.
        </p>
        <Button href={"#highlight"}>Выбрать модель</Button>
      </div>
      <img src={heroImg} alt="hero image" />
    </header>
  );
}
