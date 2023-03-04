import ProductCard from "./ProductCard/ProductCard";

function ProductsPage() {
  return (
    <div className="main-items-block items">
      <div className="main-header">
        <h2 className="main-title">Всі кросівки</h2>
        <div className="search-block">
          <img src="./img/icons/search.svg" alt="Search" />
          <input className="search-input" type="text" placeholder="Пошук..." />
        </div>
      </div>
      <div className="items-box">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        {/* <div className="items-box-item item">
          <div className="addToFavoutites-btn">
            <img src="/img/icons/liked.svg" alt="" />
          </div>
          <div className="item-image-box">
            <a href="#" className="item-image-link">
              <img src="./img/sneakers/2.jpg" alt="sneakers" />
            </a>
          </div>
          <a href="#" className="item-title">
            Чоловічі кросівки Nike Air Max 270
          </a>
          <div className="item-price-info">
            <div className="item-price-box">
              <p className="item-price-title">Ціна:</p>
              <p className="item-price">7 999 грн</p>
            </div>
            <div className="item-add-button">
              <img src="/img/icons/active-add-to-cart-btn.svg" alt="Plus" />
            </div>
          </div>
        </div>
        <div className="items-box-item item">
          <div className="item-image-box">
            <a href="#" className="item-image-link">
              <img src="./img/sneakers/3.jpg" alt="sneakers" />
            </a>
          </div>
          <a href="#" className="item-title">
            Чоловічі кросівки Nike Blazer Mid Suede
          </a>
          <div className="item-price-info">
            <div className="item-price-box">
              <p className="item-price-title">Ціна:</p>
              <p className="item-price">7 999 грн</p>
            </div>
            <button className="item-add-button">
              <img src="/img/icons/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="items-box-item item">
          <div className="item-image-box">
            <a href="#" className="item-image-link">
              <img src="./img/sneakers/4.jpg" alt="sneakers" />
            </a>
          </div>
          <a href="#" className="item-title">
            Чоловічі кросівки Puma X Aka Boku Future Rider
          </a>
          <div className="item-price-info">
            <div className="item-price-box">
              <p className="item-price-title">Ціна:</p>
              <p className="item-price">7 999 грн</p>
            </div>
            <div className="add-to-favoutites">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="items-box-item item">
          <div className="item-image-box">
            <a href="#" className="item-image-link">
              <img src="./img/sneakers/4.jpg" alt="sneakers" />
            </a>
          </div>
          <a href="#" className="item-title">
            Чоловічі кросівки Puma X Aka Boku Future Rider
          </a>
          <div className="item-price-info">
            <div className="item-price-box">
              <p className="item-price-title">Ціна:</p>
              <p className="item-price">7 999 грн</p>
            </div>
            <button className="item-add-button">
              <img src="/img/icons/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="items-box-item item">
          <div className="item-image-box">
            <a href="#" className="item-image-link">
              <img src="./img/sneakers/4.jpg" alt="sneakers" />
            </a>
          </div>
          <a href="#" className="item-title">
            Чоловічі кросівки Puma X Aka Boku Future Rider
          </a>
          <div className="item-price-info">
            <div className="item-price-box">
              <p className="item-price-title">Ціна:</p>
              <p className="item-price">7 999 грн</p>
            </div>
            <button className="item-add-button">
              <img src="/img/icons/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="items-box-item item">
          <div className="item-image-box">
            <a href="#" className="item-image-link">
              <img src="./img/sneakers/4.jpg" alt="sneakers" />
            </a>
          </div>
          <a href="#" className="item-title">
            Чоловічі кросівки Puma X Aka Boku Future Rider
          </a>
          <div className="item-price-info">
            <div className="item-price-box">
              <p className="item-price-title">Ціна:</p>
              <p className="item-price">7 999 грн</p>
            </div>
            <button className="item-add-button">
              <img src="/img/icons/plus.svg" alt="Plus" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ProductsPage;