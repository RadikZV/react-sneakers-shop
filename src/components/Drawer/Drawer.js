import s from "./Drawer.module.scss";

function Drawer({ onCloseCart, cartItems = [], deleteItem}) {

  
  console.log(cartItems);
  return (
    <div className={s.overplay}>
      <div className={s.drawer}>
        <div className="drawer-header">
          <h2>Корзина</h2>
          <img
            className="remove-item-btn"
            src="./img/icons/remove-btn.svg"
            alt="removeIcon"
            onClick={onCloseCart}
          />
        </div>
        <div className="cart-items">
          {cartItems.map((obj) => {
            return (
              <div className="cart-item">
                <div
                  className="cart-item-product-img"
                  style={{ backgroundImage: `url(${obj.photoUrl})` }}
                ></div>
                <div className="cart-item-description">
                  <a href="#" className="cart-item-name">
                    {obj.title}
                  </a>
                  <p className="cart-item-price">{obj.price} грн</p>
                </div>
                <img 
                  onClick={()=> deleteItem(obj)}
                  className="remove-item-btn"
                  src="./img/icons/remove-btn.svg"
                  alt="removeIcon"
                />
              </div>
            );
          })}
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
