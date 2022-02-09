
import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";


export default function Item(props) {


    let params = useParams()

    const [items, setItems] = useState(
        
    )

    function addToCart() {
        props.addToCart(props.items[params.id-1])
        console.log('call')
    }

    
    return (
        <div>
            <h1>{props.items[params.id-1].title}</h1>
            <img src={props.items[params.id-1].image}></img>
            <button onClick={addToCart}>Add To Cart</button>
        </div>
    )
}