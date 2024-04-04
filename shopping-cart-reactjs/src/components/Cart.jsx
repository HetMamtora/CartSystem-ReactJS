import React, { useEffect, useState } from 'react'

const Cart = ({cart,setCart,handleChange}) => {

    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    }

    const handlePrice = () => {
        let and = 0;
        cart.map((item))
    }

    useEffect(() => {
        handlePrice();
    })

  return (
    <article>
        {
            cart?.map((item) => (
                <div className='cart_box' ket={item.id}>
                    <div className='cart_img'>
                        <img src={item.img} alt='item_img'/>
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={() => {handleChange(item,+1)}}>+</button>
                        <button onClick={() => {handleChange(item,-1)}}>-</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))
        }

        <div className='total'>
            <span>Total Value of Cart </span>
            <span>₹{price}</span>
        </div>
    </article>
  )
}

export default Cart