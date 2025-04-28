import Nav from "./Nav";
import Header from "./Header";
import HighlightSection from "./HighlightSection";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <main>
        <section id="product-cards" className="product-cards">
          <ProductCard />
          <ProductCard />
        </section>
      </main>
    </div>
  );
}

export default App;
