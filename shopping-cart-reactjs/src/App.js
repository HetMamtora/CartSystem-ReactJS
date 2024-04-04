import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

const App = () => {

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

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

  return (
    <div>
      <Navbar size={cart.length}/>
      <Shop handleClick={handleClick}/>
    </div>
  )
}

export default App