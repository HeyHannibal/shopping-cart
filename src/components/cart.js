import "../styles/cart.css";
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { useOutletContext } from "react-router-dom";
import uniqid from "uniqid";

export default function Cart() {
    const [cart, setCart, removeCart] = useOutletContext();

    function removeItem(e) {
        removeCart(e);
    }

    let total = cart.reduce((prev, cur) => prev + cur.price * cur.amount, 0);

    return (
        <div>
            <div>
                <p>items: {cart.length}</p>
            </div>
            <div className="productCardContainer">
                {cart.map((product) => (
                    <div key={uniqid()} className="cartProductCard">
                            <div className='imageAndQuantity'>                            
                                <div>
                                    <p>{product.amount}</p>
                                </div>
                                <img src={product.images[0]}></img>
                            </div>
                            <div className='titleDiv'>
                                <h3>{product.name}</h3>
                                <p>In Stock</p>
                                <DeleteOutlineTwoToneIcon className='cartDeleteIcon'onClick={removeItem} data-name={product.name}/>
                            </div>
                            <p className='price'>${product.price}</p>
                    </div>
                ))}
            </div>
            <p>total: {total}</p>
        </div>
    );
}
