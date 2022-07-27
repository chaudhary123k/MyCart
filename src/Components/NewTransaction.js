import React from 'react'

export default function NewTransaction({transaction}) {
    // console.log(transaction);
    
  return (
    <>
    <div>
     <div className='product_img'>
            <img src={transaction.item.img} alt="img" height="100px" width="100px"></img>
        </div>
        <div className="title">
          <h2>{transaction.item.title}</h2>
          <p>{transaction.item.description}</p>
        </div>
        
        <div className='price'>
            <h3>{transaction.item.price}</h3>
        </div>
        <div className='price'>
            <h3>{transaction.item.quantity}</h3>
        </div>
    </div>
    </>
  )
}
