import React from 'react'
import NewTransaction from './NewTransaction';

export default function MyCart(props) {
  // console.log(props.transaction);
  return (
    
    <div> {props.transaction.map(transaction=>(
      <NewTransaction transaction={transaction}/>
  ))
  }
    </div>
  )
}
