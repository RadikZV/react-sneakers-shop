import s from "./Drawer.module.scss";

function Drawer() {
  return (
    <div className={s.overplay}>
      <div className={s.drawer}>
        <div className="drawer-header">
          <h2>Корзина</h2>
          <img
            className="remove-item-btn"
            src="./img/icons/remove-btn.svg"
            alt="removeIcon"
          />
        </div>
        <div className="cart-items">
          <div className="cart-item">
            <div
              className="cart-item-product-img"
              style={{ backgroundImage: "url('img/sneakers/1.jpg')" }}
            >
              {/* <img src="" width={70} height={70} alt="product" /> */}
            </div>
            <div className="cart-item-description">
              <a href="#" className="cart-item-name">
                Чоловічі кросівки Nike Blazer Mid Suede
              </a>
              <p className="cart-item-price">7 999 грн</p>
            </div>
            <img
              className="remove-item-btn"
              src="./img/icons/remove-btn.svg"
              alt="removeIcon"
            />
          </div>
          <div className="cart-item">
            <div
              className="cart-item-product-img"
              style={{ backgroundImage: "url('img/sneakers/2.jpg')" }}
            >
              {/* <img src="" width={70} height={70} alt="product" /> */}
            </div>
            <div className="cart-item-description">
              <a href="#" className="cart-item-name">
                Чоловічі кросівки Nike Air Max 270
              </a>
              <p className="cart-item-price">7 999 грн</p>
            </div>
            <img
              className="remove-item-btn"
              src="./img/icons/remove-btn.svg"
              alt="removeIcon"
            />
          </div>
        </div>
        <div className="drawer-bottom">
          <ul className="total-price-box">
            <li>
              <span>Всього:</span>
              <div></div>
              <span className="total-price">15 000 грн</span>
            </li>
          </ul>
          <a href="#" className="make-order-btn">
            Оформити замовлення
          </a>
        </div>
      </div>
    </div>
  );
}

export default Drawer;