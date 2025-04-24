function App() {
  return (
    <div className="container">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="header-text-box">
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h1>
        <p className="header-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          expedita temporibus voluptatum culpa numquam doloribus nihil fugit. Ex
          exercitationem blanditiis, molestiae iste nam ad illo est molestias,
          voluptatem voluptatibus officia?
        </p>
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
      </div>
      <img src="../public/hero3.png" alt="hero image" />
    </header>
  );
}
export default App;
