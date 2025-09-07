import { Ruler, Scale, Plug, SmartphoneCharging } from "lucide-react";

function ProductCard({ title, size, weight, plug, power, href, img }) {
  return (
    <article className="product">
      <img className="product-image" src={img} alt={title} />
      <div className="product-details">
        <h3>{title}</h3>
        <ul>
          <li>
            <Ruler color={"var(--color-accent)"} />
            <span className="product-text">{size}</span>
          </li>
          <li>
            <Scale color={"var(--color-accent)"} />
            <span className="product-text">{weight}</span>
          </li>
          <li>
            <Plug color={"var(--color-accent)"} />
            <span className="product-text">{plug}</span>
          </li>
          <li>
            <SmartphoneCharging color={"var(--color-accent)"} />
            <span className="product-text">{power}</span>
          </li>
        </ul>
      </div>
      <div className="card-link">
        <a className="text-button" href={`#${href}`}>
          Подробнее →
        </a>
      </div>
    </article>
  );
}

export default ProductCard;
