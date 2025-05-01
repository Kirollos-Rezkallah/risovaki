import Nav from "./Nav";
import Header from "./Header";
import HighlightSection from "./HighlightSection";
import ProductCard from "./ProductCard";
import { printers } from "../product-card-data.js";
import { printers_highlight } from "../hightlight-data.js";

function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <main>
        <section id="product-cards" className="product-cards-section">
          <h2>Выберите свою модель Рисоваки</h2>
          <div className="product-cards">
            {printers.map((printer) => (
              <ProductCard key={printer.title} {...printer} />
            ))}
          </div>
        </section>

        {printers_highlight.map((printer) => (
          <HighlightSection key={printer.title} {...printer} />
        ))}
      </main>
    </div>
  );
}

export default App;
