function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="header-left">
          <a href="#">
            <img src="./img/logo.svg" alt="logo" />
          </a>
          <div>
            <h3 className="header-company-name">React Sneakers</h3>
            <p className="header-company-subcription">Sneakers shop</p>
          </div>
        </div>
        <div className="header-right">
          <ul className="header-right-menu">
            <li>
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
