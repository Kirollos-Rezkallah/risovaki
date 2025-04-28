import Nav from "./Nav";
import Header from "./Header";
import HighlightSection from "./HighlightSection";
import CardProduct from "./ProductCard";

function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <main>
        <section className="products-cards">
          <ProductCard />
        </section>
      </main>
    </div>
  );
}

export default App;
