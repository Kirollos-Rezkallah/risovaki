import heroImg from "../assets/hero.png";
import Button from "./Button";

export default function Header() {
  return (
    <header>
      <div className="header-text-box">
        <h1 className="fade-in-up delay-1">Твой легкий старт в ЗD печати</h1>
        <p className="header-text fade-in-right delay-3">
          Выберите идеальный <strong>3D-принтер</strong> для своих задач:{" "}
          <strong>Рисоваки</strong> или <strong>Рисоваки Pro</strong>
          <br /> Обе модели созданы для лёгкого старта, стабильной работы и
          высокой точности. Начните печатать с уверенностью и откройте новые
          возможности творчества.
        </p>
        <Button className="btn" href={"#product-cards"}>
          Выбрать модель
        </Button>
      </div>
      <img className="fade-in-left delay-2" src={heroImg} alt="hero image" />
    </header>
  );
}
