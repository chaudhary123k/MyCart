import React, { useState }  from 'react'
import Item from './Item'
import { products } from "./Product";
import "./Cart.css";



export default function Cart(props) {
  const [totalPrice , setTotalPrice]=useState(0);
  const handleClick = (item) => { 
    // console.log(item);
    // e.preventDefault();
    
    setTotalPrice(totalPrice+Number(item.price));
   const data={
      item:item
   }
   props.onsave(data);

  }
  return (
    <>
      <div className='cart'>
        {
          products.map((item) => {
            return <Item item={item} key={item.id} handleClick={handleClick} />
          })
        }
      </div>
      <div><h1>Total Price{totalPrice}</h1></div>
      

    </>
  )
}
