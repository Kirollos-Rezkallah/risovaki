import CarouselSlider from "./CarouselSlider";
import Button from "./Button";

export default function HighlightSection({ title, description, images, id }) {
  return (
    <section id={id} className="highlight">
      <h2>{title}</h2>
      <div className="highlight-container">
        <CarouselSlider>
          {images.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} />
          ))}
        </CarouselSlider>

        <div className="highlight-text">
          <p>{description}</p>
          <Button
            href={"https://t.me/myidea24"}
            bgColor={"var(--color-primary)"}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  );
}
