import { useOutletContext } from "react-router-dom";
import uniqid from 'uniqid'


export default function Cart() {

    const [cart, setCart, removeCart] = useOutletContext();
 
    function removeItem(e) {
        removeCart(e)
    }
    

    let total = cart.reduce((prev,cur) => prev + cur.price, 0)



    return(
        <div>
            <div><p>items: {cart.length}</p></div>
            {cart.map(product => (
                <div key={uniqid()}>
                    <h3>{product.name}</h3>
                    <img src={product.images[0]}></img>
                    <button onClick={removeItem} data-name={product.name}>Remove</button>
                </div>
            ))}
            <p>total: {total}</p>
        </div>
    )
}