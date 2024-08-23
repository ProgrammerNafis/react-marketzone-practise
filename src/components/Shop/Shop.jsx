import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
      .then(response => response.json())
      .then(data => setProducts(data))
    },[])


    const AddProduct = AddedProduct =>{
        console.log(`Product Added!!!!` , AddedProduct);
        const newCArt = [...cart,AddedProduct]
        setCart(newCArt)
    }

    return (
        <div className='mainShopDiv'>
        <div className='Shop'>
            {
                products.map(item => (
                <Product key={item.key} 
                pd={item}
                ReviewPd={true}
                AddProduct={AddProduct}
                />
            
            ))
            }

        </div>
        <div className="anotherSectionShop">
          <Cart cart={cart}/>
        </div>
        </div>
    );
};

export default Shop;