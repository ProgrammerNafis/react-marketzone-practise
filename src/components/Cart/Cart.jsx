/* eslint-disable react/prop-types */
import './Cart.css'
const Cart = ({cart}) => {

    const pdPrice = cart.reduce((total,pd) => total + pd.price, 0)

    return (
        <div>
              <h1>Order Summary:</h1>
              <h2>Total Cart: {cart.length}</h2>
              <h3>Total Product Price: {pdPrice}</h3>
              
        </div>
    );
};

export default Cart;