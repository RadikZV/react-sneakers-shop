import ProductsPage from "./ProductsPage/ProductsPage";
import Slider from "./Slider/Slider";

function Main(props) {
  return (
    <main className="main">
      <div className="main-container container">
        <Slider />
        <ProductsPage setCartItems={props.setCartItems}/>
      </div>
    </main>
  );
}

export default Main;
