import highlightImg1 from "../assets/highlight-img-1.jpg";
import MarketplaceButtons from "./MarketplaceButtons";

export default function HighlightSection({
  title,
  description,
  ozonHref,
  wildberriesHref,
  yandexHref,
  id,
}) {
  return (
    <section id={id} className="highlight">
      <h2>{title}</h2>
      <div className="hightlight-container">
        <img src={highlightImg1} alt="First highlight image" />
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
