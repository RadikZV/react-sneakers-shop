import axios from "axios";
import React from "react";
import ProductCard from "./ProductCard/ProductCard";

import s from "./ProductsPage.module.scss";

// const products = [
//   {
//     title: "Чоловічі Кросівки Nike Blazer Mid Suede",
//     price: "12 999",
//     photoUrl: "./img/sneakers/1.jpg",
//   },
//   {
//     title: "Чоловічі Кросівки Nike Air Max 270",
//     price: "12 999",
//     photoUrl: "./img/sneakers/2.jpg",
//   },
//   {
//     title: "Чоловічі Кросівки Nike Blazer Mid Suede",
//     price: "8 499",
//     photoUrl: "./img/sneakers/3.jpg",
//   },
//   {
//     title: "Кроссовки Puma X Aka Boku Future Riderh",
//     price: "8 999",
//     photoUrl: "./img/sneakers/4.jpg",
//   },
//   {
//     title: "Чоловічі Кросівки Under Armour Curry 8",
//     price: "15 199 ",
//     photoUrl: "./img/sneakers/5.jpg",
//   },
//   {
//     title: "Чоловічі Кросівки Nike Kyrie 7h",
//     price: "11 299",
//     photoUrl: "./img/sneakers/6.jpg",
//   },
//   {
//     title: "Чоловічі Кросівки Jordan Air Jordan 11",
//     price: "10 799",
//     photoUrl: "./img/sneakers/7.jpg",
//   },
//   {
//     title: "Чоловічі Кросівки Nike LeBron XVIII",
//     price: "16 499",
//     photoUrl: "./img/sneakers/8.jpg",
//   },
// ];



function ProductsPage(props) {

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://64148f4d8dade07073c36172.mockapi.io/items').then(res => {
      const products = res.data;
      setItems(products)
    })
  },[])

  const onAddToCart = (obj) => {
    
    props.setCartItems(prev => prev.includes(obj) ? prev : [...prev, obj])
  }
  return (
    <div className="main-items-block items">
      <div className={s.mainHeader}>
        <h2 className={s.mainTitle}>Всі кросівки</h2>
        <div className={s.searchBlock}>
          <img src="./img/icons/search.svg" alt="Search" />
          <input className={s.searchInput} type="text" placeholder="Пошук..." />
        </div>
      </div>
      <div className={s.itemsBox}>
        {items.map((card) => {
          return (
            <ProductCard
              title={card.title}
              price={card.price}
              photoUrl={card.photoUrl}
              setCartItems={props.setCartItems}
              onPlus={() => onAddToCart(card)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
