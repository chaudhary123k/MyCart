import React , {useState} from 'react';
import Cart from './Cart';
import Header from './Header';
import "./Home.css";
import MyCart from './MyCart';



export default function Home() {
  const [transactions , updateTransaction] =useState([]);
  const onSaveHandler=(data)=>{
    //  console.log(data.item.price);
    const transactionArray= [...transactions];
    // console.log(transactionArray);
    transactionArray.push(data);
    updateTransaction(transactionArray);
  }
  
  return (
    <div className='home'>
      <Header />
      <Cart onsave={onSaveHandler}/>
  <MyCart transaction={transactions}/>
    </div>
  )
}
