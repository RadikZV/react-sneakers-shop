import s from './Header.module.scss';

function Header(props) {
  return (
    <header className={s.header}>
      <div className={`${s.headerContainer} ${s.container}`}>
        <div className={s.headerLeft}>
          <a href="#">
            <img src="./img/logo.svg" alt="logo" />
          </a>
          <div>
            <a href="#" className={s.headerCompanyName}>React Sneakers</a>
            <p className={s.headerCompanySubcription}>Sneakers shop</p>
          </div>
        </div>
        <div className={s.headerRight}>
          <ul className={s.headerRightMenu}>
            <li onClick={props.onClickCart}>
              <img src="./img/icons/cart.svg" alt="cart" />
              <span>999грн</span>
            </li>
            <li>
              <img
                src="./img/icons/favourites-link-icon.svg"
                alt="favourites"
              />
            </li>
            <li>
              <img src="./img/icons/profile.svg" alt="profile" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
