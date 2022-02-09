
import uniqid from 'uniqid'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ShopCart(props) {

    const [cart, setCart] = useState([])

    useEffect(()=> {
        setCart(props.cart)
        console.log(props.cart)
    },[cart])

    let findInCart = (id) => cart.findIndex(items => items.id === Number(id))

    function removeItem(e) {
        let id = Number(findInCart(e.target.dataset.id))
        console.log(id)
        props.remove(cart[id])
        let newCart = [...cart]
        newCart.splice(id,1)
        setCart(newCart)
    }

return (
    <div>
        {cart.map(item => (
        <div key={uniqid()} data-id={item.id} >
            <Link to={`/shop/${item.id}`}>
                <p>{item.title}</p>
            </Link>
                            <img src={item.image}></img>
                            <button data-id={item.id}  onClick={removeItem}>Remove</button>

        </div>
        ))}
    </div>
)
}