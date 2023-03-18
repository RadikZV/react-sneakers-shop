import React from "react";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {

  // const [isOpened, setOpened] = React.useState()
  const [isCartOpened, setCartOpened] = React.useState(false); 

  const [cartItems, setCartItems] = React.useState([]);

  const deleteItemFromCart = (item) => {
    setCartItems(cartItems.filter(p => p !== item));
  };
  return (
    <div className="wrapper">
      
      {isCartOpened && <Drawer cartItems={cartItems} deleteItem={deleteItemFromCart} onCloseCart={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      <Main setCartItems={setCartItems}/>
      
    </div>
  );
}

export default App;
