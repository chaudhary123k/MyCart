import React , {useState} from 'react';
import "./Item.css";


const Item = ({item , handleClick}) =>{
    const {title, price ,description , img , quantity} =item;
    const [count, setCount] = useState(0);   
    const handleminus=()=>{
     setCount(quantity-1);
    }
    const handleplus=()=>{
       setCount(quantity+1);
    }
    return (
        <>
        <div className='items'>
 
        <div className='product_img'>
            <img src={img} alt="img" height="100px" width="100px"></img>
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        
        <div className='price'>
            <h3>{price}</h3>
        </div>
      
        <div className='Button'>
        
            <button className='btn btn-info ms-2' onClick={handleminus} value={count} style={{ width:50 , backgroundColor:"green" ,color:"white"}}>-</button>
           <button className='btn' style={{ width:50 , backgroundColor:"green" ,color:"white"}}>{quantity}</button>
            <button className='btn btn-info ms-2' onClick={handleplus} value={count} style={{ width:50 , backgroundColor:"green" , color:"white" }}>+</button>
        </div>
        <div>
            <button className='Btn' onClick={()=>handleClick(item)}>ADD to cart</button>
        </div>
        </div>
        </>
    )
};
export default Item;
