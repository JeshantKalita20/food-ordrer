import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [CartisShown, setCartisShown] = useState(false);

  const ShowCartHandler = () => {
    setCartisShown(true);
  };

  const HideCartHandler = () => {
    setCartisShown(false);
  };

  return (
    <CartProvider>
      {CartisShown === true ? <Cart onClose={HideCartHandler} /> : null}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
