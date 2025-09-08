import Nav from "./Nav";
import Header from "./Header";
import HighlightSection from "./HighlightSection";
import ProductCard from "./ProductCard";
import { printers_highlight, printers } from "../data.js";
import Downloads from "./Downloads.jsx";
import Library from "./Library.jsx";
import Footer from "./Footer.jsx";

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
          <div id={printer.id} className="padding-top" key={printer.id}>
            <HighlightSection key={printer.title} {...printer} id="" />
          </div>
        ))}
        <Library />
        <Downloads />
      </main>

      <Footer />
    </div>
  );
}

export default App;
