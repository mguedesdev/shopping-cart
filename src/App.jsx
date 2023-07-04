import React from 'react';

import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';
import AlertBox from './components/AlertBox/AlertBox';

function App() {


  return (
    <Provider>
      <AlertBox />
      <Cart/>
      <Header />
      <Products/>
    </Provider>
  );
}

export default App;
