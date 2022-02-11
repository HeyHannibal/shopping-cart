import { useParams } from "react-router-dom";
import { getProduct } from "../data";



export default function Product() {
    let params = useParams();
    let product = getProduct(parseInt(params.shopId, 10))


    return (
    <div>
        
        <h2>Buy: {product.name} : {product.number}</h2>
        <p>Total Due: {product.amount}</p>

    </div>
    )
}