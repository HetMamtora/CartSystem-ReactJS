import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import './App.css';
import Cart from './components/Cart';

const App = () => {

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick=(item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if(item.id === product.id){
        isPresent = true;
      }
    })

    if(isPresent){
      setWarning(true);
      setTimeout(()=>{
        setWarning(false)
      },2000);
      return;
    }

    setCart([...cart,item]);
  }

  const handleChange = (item, d) => {
    const updatedCart = cart.map((cartItem) => {
        if(cartItem.id === item.id){
          const newAmount = cartItem.amount + d;
          const amount = newAmount < 0 ? 0 : newAmount;
          
          return { ...cartItem, amount };
        }
        return cartItem;
    });

    setCart(updatedCart);
  }

  return (
    <div>
      <Navbar size={cart.length} setShow={setShow}/>
      {
        show ? <Shop handleClick={handleClick}/>
        : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
      
      {
        warning &&
        <div className='warning'>
          Item is already in Cart
        </div>
      }
      <section>
      <center><span>Made with &#129505;&nbsp;&#169; Het Mamtora</span></center></section>
    </div>
  )
}

export default App