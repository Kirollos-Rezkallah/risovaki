import CarouselSlider from "./CarouselSlider";
import MarketplaceButtons from "./MarketplaceButtons";

export default function HighlightSection({
  title,
  description,
  ozonHref,
  wildberriesHref,
  yandexHref,
  images,
  id,
}) {
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
          <MarketplaceButtons
            ozonHref={ozonHref}
            wildberriesHref={wildberriesHref}
            yandexHref={yandexHref}
          />
        </div>
      </div>
    </section>
  );
}
