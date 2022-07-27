import React from 'react';
import "./Header.css";

export default function Header({setShow}) {
  return (
    <div className='header'>
      <h1 >Online Cart</h1>
      <div className='cart'>
        <span>
        <i class="fas fa-shopping-cart fa-3x" >MyCart</i>
        </span>
        <span></span>
      </div>
    </div>
  )
}
