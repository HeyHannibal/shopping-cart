import "../styles/cart.css";
import CloseIcon from "@mui/icons-material/Close";
import { useOutletContext } from "react-router-dom";
import uniqid from "uniqid";

export default function Cart() {
    const [cart, setCart, removeCart] = useOutletContext();

    function removeItem(e) {
        removeCart(e);
    }

    function quantity(e) {
        let update = cart.findIndex(
            (item) => item.name === e.currentTarget.parentNode.dataset.name
        );
        let newCart = [...cart];
        if (e.currentTarget.id === "increase") {
            newCart[update]["amount"] += 1;
        } else if (e.currentTarget.id === "decrease") {
            newCart[update]["amount"] -= 1;
        } else newCart[update]["amount"] = e.currentTarget.value;
        setCart(newCart);
    }

    let total = cart.reduce((prev, cur) => prev + cur.price * cur.amount, 0);

    return (
        <div id="cart">
            <div className="productCardContainer">
                <div className="tables">
                    <p>ITEM</p>
                    <p>QUANTITY</p>
                    <p>PRICE</p>
                </div>
                {cart.map((product) => (
                    <div
                        key={uniqid()}
                        className="cartProductCard"
                        data-name={product.name}
                    >
                        <CloseIcon
                            className="cartDeleteIcon"
                            onClick={removeItem}
                            data-name={product.name}
                        />
                        <div className="cartItem">
                            <img src={product.images[0]}></img>
                            <div className="titleDiv">
                                <h3>{product.name}</h3>
                                <p>In Stock</p>
                            </div>
                        </div>
                        <div className="quantity" data-name={product.name}>
                            <button id="decrease" onClick={quantity}>
                                -
                            </button>
                            <input
                                size="sm"
                                type="number"
                                value={product.amount}
                                onChange={quantity}
                                data-name={product.name}
                                min={0}
                            ></input>
                            <button id="increase" onClick={quantity}>
                                +
                            </button>
                        </div>

                        <p className="price">${product.price}</p>
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
