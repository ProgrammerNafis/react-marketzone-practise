/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const {name,category,seller,stock,price,key} = props.pd;
    return (
        <div>
         <div className="container-pd">
            <div className="title">
               <Link to={`/order/${key}`}>  {name}</Link>
            </div>
            <div className="otherinfo">
                Cat:{category} ||| seller : {seller} ||| stock: {stock} <b>Price: {price}</b>
            </div>
         {
            props.ReviewPd && 
            <button className='addCartBtn' onClick={()=>props.AddProduct(props.pd)}>ADD TO CART</button>
         
         }   
         </div>
        </div>
    );
};



export default Product;