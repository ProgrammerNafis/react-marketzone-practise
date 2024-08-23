import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";


const OrderReview = () => {
    const {id} = useParams()
    const [prd, setPrd] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
      .then(response => response.json())
      .then(data => setPrd(data))
    },[])

    const result = prd.filter(itm => itm.key === id)
    console.log(result);

    return (
        <div>
      {
        result.map(itm=> (

        <Product key={itm.key} ReviewPd={false} pd={itm}></Product> 
      ))
      }
        </div>
    );
};

export default OrderReview;