import ProductsPage from "./ProductsPage/ProductsPage";
import Slider from "./Slider/Slider";

function Main() {
  return (
    <main className="main">
      <div className="main-container container">
        <Slider />
        <ProductsPage />
      </div>
    </main>
  );
}

export default Main;
