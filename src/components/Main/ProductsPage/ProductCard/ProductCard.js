function ProductCard() {
  return (
    <div className="items-box-item item">
      <div className="addToFavoutites-btn">
        <img src="/img/icons/unliked.png" alt="unliked" />
      </div>
      <div className="item-image-box">
        <a href="#" className="item-image-link">
          <img src="./img/sneakers/1.jpg" alt="sneakers" />
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
        <div className="item-add-button">
          <img src="/img/icons/add-to-cart.svg" alt="Plus" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;