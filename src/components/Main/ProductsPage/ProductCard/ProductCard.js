import s from "./ProductCard.module.scss";

function ProductCard(props) {
  return (
    <div className={s.cardItem}>
      <div className={s.addToFavoutitesBtn}>
        <img src="/img/icons/unliked.png" alt="unliked" />
      </div>
      <div className={s.itemImageBox}>
        <a href="#" className={s.itemImageLink}>
          <img src={props.photoUrl} alt="sneakers" />
        </a>
      </div>
      <a href="#" className={s.itemTitle}>
        {props.title}
      </a>
      <div className={s.itemPriceInfo}>
        <div className={s.itemPriceBox}>
          <p className={s.itemPriceTitle}>Ціна:</p>
          <p className={s.itemPrice}>{props.price} грн</p>
        </div>
        <div className={s.itemAddButton}>
          <img src="/img/icons/add-to-cart.svg" alt="Plus" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;