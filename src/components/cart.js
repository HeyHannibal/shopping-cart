import "../styles/cart.css";
import CloseIcon from '@mui/icons-material/Close';import { useOutletContext } from "react-router-dom";
import uniqid from "uniqid";

export default function Cart() {
    const [cart, setCart, removeCart] = useOutletContext();

    function removeItem(e) {
        removeCart(e);
    }
    let total = cart.reduce((prev, cur) => prev + cur.price * cur.amount, 0);
    return (
        <div id="cart">
            <div>
                <p>items: {cart.length}</p>
            </div>
            <div className="productCardContainer">
                <div className='tables'>
                    <p>ITEM</p>
                    <p>QUANTITY</p>
                    <p>PRICE</p>
                </div>
                {cart.map((product) => (
                    <div key={uniqid()} className="cartProductCard">
                       <CloseIcon className='cartDeleteIcon' onClick={removeItem} data-name={product.name} />
                        <div className='cartItem'>
                            <img src={product.images[0]}></img>
                            <div className='titleDiv'>
                            <h3>{product.name}</h3>
                            <p>In Stock</p>
                            
                        </div>
                        </div>
                        
                        <input size='sm' type='number' value={product.amount} ></input>
                        
                        <p className="price">{product.price}</p>
                    </div>
                ))}
            <div id="totalAndCheckout">
                <h4>Total:</h4> <h4>${total}</h4>
                <h4>Shipping:</h4> <h4>$11</h4>
                <button>Place Order</button>
            </div>
               
            </div>
            
        </div>
    );
}
