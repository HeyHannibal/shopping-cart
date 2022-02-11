import { useParams, useOutletContext, Link } from "react-router-dom";
import { getProduct, getProductCategory } from "../data";
import uniqid from 'uniqid'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Category() {
    let params = useParams();
    let products = getProductCategory(params.categoryname, params.categoryselector)
    const [cart, setCart] = useOutletContext();

    function addToCart(e) {
        let addThis = products.find(item => item.name === e.target.dataset.name)
         setCart(prev => [...prev, addThis])
    }
    
    return (
        <div>
            {products.map(product => (
                <div key={uniqid()}>
                    <Link to={`/shop/${product.number}`} key={product.number}>
                    <p>{product.name}</p>
                    </Link>
                    <img src={product.images[0]}></img>
                    <button onClick={addToCart} data-name={product.name}><AddShoppingCartIcon/></button>
                </div>
            ))}
        </div>
    )
}