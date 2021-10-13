import React from 'react'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Productspage from './pages/Productspage'
import Cartpage from './pages/Cartpage'
import SingleProductpage from './pages/SingleProductpage'
import { CartContext } from './CartContext'
import { useState,useEffect } from 'react'



function App() {
  
  const [cart,setCart] = useState({}); 

  useEffect( ()=>{
    
  const cart = window.localStorage.getItem('cart');
  setCart(JSON.parse(cart));

  },[]);

  useEffect(()=>{
    window.localStorage.setItem('cart',JSON.stringify(cart));

  },[cart])
  
  
  
  return (
    
    <>
      <Router>
        <CartContext.Provider value={{ cart,setCart }}>

          <Navigation />
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/products' exact component={Productspage} />
            <Route path='/cart' exact component={Cartpage} />
            <Route path='/products/:_id' exact component={SingleProductpage} />

          </Switch>
        </CartContext.Provider>
      </Router>

    </>
  );
}

export default App;
