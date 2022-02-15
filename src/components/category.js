import { useParams, useOutletContext, Link } from "react-router-dom";
import { getProduct, getProductCategory } from "../data";
import uniqid from "uniqid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Category() {
    let params = useParams();
    let products = getProductCategory(
        params.categoryname,
        params.categoryselector
    );
    const [cart, removeCart, addToCart] = useOutletContext();
    function add(e) {
        addToCart(e.currentTarget.dataset.name);
    }

    return (
        <div id="shopWindowDiv">
            {products.map((product) => (
                <div key={uniqid()} className="guitarDiv">
                    <Link to={`/shop/${product.number}`} key={product.number}>
                        <img src={product.images[0]}></img>
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                    </Link>
                    <a href="#" className="addToCart pseudoAdd">
                        <AddShoppingCartIcon onClick={add} data-name={product.name} />
                    </a>
                </div>
            ))}
        </div>
    );
}
