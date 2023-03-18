import React from "react";
import s from "./ProductCard.module.scss";

function ProductCard({title, photoUrl,price, onPlus}) {

  const [isAdded, setIsAdded] = React.useState(false);

  const onPlusClick = () => {
    onPlus();
    setIsAdded(!isAdded);
  }

  const [isFavourite, setIsFavourite] = React.useState(false);
  const onFavouriteClick = () => {
    setIsFavourite(!isFavourite);
  }

  return (
    <div className={s.cardItem}>
      <div className={s.addToFavoutitesBtn} onClick={onFavouriteClick}>
        <img src={isFavourite ? "/img/icons/liked.svg" :"/img/icons/unliked.png"} alt="unliked" />
      </div>
      <div className={s.itemImageBox}>
        <a href="#" className={s.itemImageLink}>
          <img src={photoUrl} alt="sneakers" />
        </a>
      </div>
      <a href="#" className={s.itemTitle}>
        {title}
      </a>
      <div className={s.itemPriceInfo}>
        <div className={s.itemPriceBox}>
          <p className={s.itemPriceTitle}>Ціна:</p>
          <p className={s.itemPrice}>{price} грн</p>
        </div>
        <div  >
          
        </div>
        <img className={s.itemAddButton} onClick={onPlusClick} src={isAdded ? "/img/icons/active-add-to-cart-btn.svg" : "/img/icons/add-to-cart.svg" } alt="Plus" />
      </div>
    </div>
  );
}

export default ProductCard;