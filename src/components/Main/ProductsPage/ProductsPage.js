import ProductCard from "./ProductCard/ProductCard";

import s from "./ProductsPage.module.scss";

const products = [
  {title: "Чоловічі Кросівки Nike Blazer Mid Suede", price: "12 999", photoUrl: "./img/sneakers/1.jpg"},
  {title: "Чоловічі Кросівки Nike Air Max 270", price: "12 999", photoUrl: "./img/sneakers/2.jpg"},
  {title: "Чоловічі Кросівки Nike Blazer Mid Suede", price: "8 499", photoUrl: "./img/sneakers/3.jpg"},
  {title: "Кроссовки Puma X Aka Boku Future Riderh", price: "8 999", photoUrl: "./img/sneakers/4.jpg"},
  {title: "Чоловічі Кросівки Under Armour Curry 8", price: "15 199 ", photoUrl: "./img/sneakers/5.jpg"},
  {title: "Чоловічі Кросівки Nike Kyrie 7h", price: "11 299", photoUrl: "./img/sneakers/6.jpg"},
  {title: "Чоловічі Кросівки Jordan Air Jordan 11", price: '10 799', photoUrl: "./img/sneakers/7.jpg"},
  {title: "Чоловічі Кросівки Nike LeBron XVIII", price: '16 499', photoUrl: "./img/sneakers/8.jpg"},
]

function ProductsPage() {
  return (
    <div className="main-items-block items">
      <div className={s.mainHeader}>
        <h2 className={s.mainHitle}>Всі кросівки</h2>
        <div className={s.searchBlock}>
          <img src="./img/icons/search.svg" alt="Search" />
          <input className={s.searchInput} type="text" placeholder="Пошук..." />
        </div>
      </div>
      <div className={s.itemsBox}>
        {products.map( card => {
          return <ProductCard title={card.title} price={card.price} photoUrl={card.photoUrl}/>
        })}
        {/* <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/> */}
        {/* <div className={s.items-box-item item">
          <div className={s.addToFavoutites-btn">
            <img src="/img/icons/liked.svg" alt="" />
          </div>
          <div className={s.item-image-box">
            <a href="#" className={s.item-image-link">
              <img src="./img/sneakers/2.jpg" alt="sneakers" />
            </a>
          </div>
          <a href="#" className={s.item-title">
            Чоловічі кросівки Nike Air Max 270
          </a>
          <div className={s.item-price-info">
            <div className={s.item-price-box">
              <p className={s.item-price-title">Ціна:</p>
              <p className={s.item-price">7 999 грн</p>
            </div>
            <div className={s.item-add-button">
              <img src="/img/icons/active-add-to-cart-btn.svg" alt="Plus" />
            </div>
          </div>
        </div>
        <div className={s.items-box-item item">
          <div className={s.item-image-box">
            <a href="#" className={s.item-image-link">
              <img src="./img/sneakers/3.jpg" alt="sneakers" />
            </a>
          </div>
          <a href="#" className={s.item-title">
            Чоловічі кросівки Nike Blazer Mid Suede
          </a>
          <div className={s.item-price-info">
            <div className={s.item-price-box">
              <p className={s.item-price-title">Ціна:</p>
              <p className={s.item-price">7 999 грн</p>
            </div>
            <button className={s.item-add-button">
              <img src="/img/icons/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className={s.items-box-item item">
          <div className={s.item-image-box">
            <a href="#" className={s.item-image-link">
              <img src="./img/sneakers/4.jpg" alt="sneakers" />
            </a>
          </div>
          <a href="#" className={s.item-title">
            Чоловічі кросівки Puma X Aka Boku Future Rider
          </a>
          <div className={s.item-price-info">
            <div className={s.item-price-box">
              <p className={s.item-price-title">Ціна:</p>
              <p className={s.item-price">7 999 грн</p>
            </div>
            <div className={s.add-to-favoutites">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className={s.items-box-item item">
          <div className={s.item-image-box">
            <a href="#" className={s.item-image-link">
              <img src="./img/sneakers/4.jpg" alt="sneakers" />
            </a>
          </div>
          <a href="#" className={s.item-title">
            Чоловічі кросівки Puma X Aka Boku Future Rider
          </a>
          <div className={s.item-price-info">
            <div className={s.item-price-box">
              <p className={s.item-price-title">Ціна:</p>
              <p className={s.item-price">7 999 грн</p>
            </div>
            <button className={s.item-add-button">
              <img src="/img/icons/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className={s.items-box-item item">
          <div className={s.item-image-box">
            <a href="#" className={s.item-image-link">
              <img src="./img/sneakers/4.jpg" alt="sneakers" />
            </a>
          </div>
          <a href="#" className={s.item-title">
            Чоловічі кросівки Puma X Aka Boku Future Rider
          </a>
          <div className={s.item-price-info">
            <div className={s.item-price-box">
              <p className={s.item-price-title">Ціна:</p>
              <p className={s.item-price">7 999 грн</p>
            </div>
            <button className={s.item-add-button">
              <img src="/img/icons/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className={s.items-box-item item">
          <div className={s.item-image-box">
            <a href="#" className={s.item-image-link">
              <img src="./img/sneakers/4.jpg" alt="sneakers" />
            </a>
          </div>
          <a href="#" className={s.item-title">
            Чоловічі кросівки Puma X Aka Boku Future Rider
          </a>
          <div className={s.item-price-info">
            <div className={s.item-price-box">
              <p className={s.item-price-title">Ціна:</p>
              <p className={s.item-price">7 999 грн</p>
            </div>
            <button className={s.item-add-button">
              <img src="/img/icons/plus.svg" alt="Plus" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ProductsPage;