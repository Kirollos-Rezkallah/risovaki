import highlightImg1 from "../assets/highlight-img-1.jpg";

export default function HighlightSection() {
  return (
    <section id="highlight" className="highlight">
      <img src={highlightImg1} alt="First highlight image" />
      <div className="highlight-text">
        <h2>Компактный 3D-принтер для начинающих и энтузиастов</h2>
        <p>
          EasyThreed K7 — лёгкий, тихий и простой в использовании 3D-принтер.
          Идеален для домашнего обучения, творчества и DIY-проектов. Простое
          управление одной кнопкой и бесплатная библиотека моделей для быстрого
          старта.
        </p>
      </div>
    </section>
  );
}
