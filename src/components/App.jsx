import Nav from "./Nav";
import Header from "./Header";
import HighlightSection from "./HighlightSection";
import ProductCard from "./ProductCard";
import { printers } from "../data.js";

function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <main>
        <section id="product-cards" className="product-cards-section">
          <h2>Выберите свою модель Рисоваки</h2>
          <div className="product-cards">
            {/* <ProductCard /> */}
            {printers.map((printer) => (
              <ProductCard key={printer.title} {...printer} />
            ))}
            {/* <ProductCard /> */}
          </div>
        </section>
        <section>
          <HighlightSection />
          <HighlightSection />
        </section>
      </main>
    </div>
  );
}

export default App;
