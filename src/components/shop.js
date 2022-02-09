
import React, { useState, useEffect } from 'react'

import { Link ,useParams, } from 'react-router-dom'


export default function Shop(props) {
    useEffect(() => {
       if(items.length === 0){
            fetchItems()
            fetchCategories()
        }
    },[])

    let params = useParams()

    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])

    const fetchItems = async () => {
        const data = await fetch(
            'https://fakestoreapi.com/products/'     
             )
        let items = await data.json()
        setItems(items)
        props.saveAllItemsInApp(items)
    }


    const fetchCategories = async () => {
        const data = await fetch(
            'https://fakestoreapi.com/products/categories'
                         )
        let items = await data.json()
        setCategories(items)
    }



 

    function addToCart(e){
        props.addToCart(items[e.target.dataset.id - 1])
    }

    return (
        <div className='shopItself'>
            {items.map(item => (
                <div className='shopCard'  key={item.id} >
                  <Link to={`/shop/${item.id}`} >
                      {item.title}
                    <img className='shop-img' src={item.image}></img>
                    </Link>  
                    <button onClick={addToCart} className='addToCart' data-id={item.id}>Add</button>
                </div>
    ))}
    <ul>
        {categories.map(item =>(
            <Link key={item} to={`/${item}`}>{item}</Link>
        ))}
    </ul>
        </div>
    )
}