import { useParams, useOutletContext } from "react-router-dom";
import { getProduct } from "../data";



export default function Product() {
    let params = useParams();
    const [cart, setCart] = useOutletContext();


    let product = getProduct(parseInt(params.shopId, 10))
        
    function addToCart() {
        setCart(prev => [...prev, product])
    }

    return (
    <div>
        
        <h2>Buy: {product.name} </h2>
        <img src={product.images[1]}></img>
        <button onClick={addToCart}>Add To Cart</button>
    </div>
    )
}