import firstImg from "../assets/highlight-img-1.jpg";
import icon from "../assets/favicon.svg";

function ProductCard() {
  return (
    <article className="product">
      <img className="product-image" src={firstImg} alt="img" />
      <div className="product-details">
        <h3>Lorem ipsum dolor</h3>
        <ul>
          <li>
            <img src={icon} alt="icon" />
            <span>Lorem ipsum</span>
          </li>
          <li>
            <img src={icon} alt="icon" />
            <span>Lorem ipsum</span>
          </li>
          <li>
            <img src={icon} alt="icon" />
            <span>Lorem ipsum</span>
          </li>
          <li>
            <img src={icon} alt="icon" />
            <span>Lorem ipsum</span>
          </li>
        </ul>
      </div>

      <button>Подробнее →</button>
    </article>
  );
}

export default ProductCard;
