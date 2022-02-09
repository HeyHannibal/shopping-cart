
import { useParams, Link } from 'react-router-dom'
import { useState , useEffect } from 'react'


export default function Categroy(props) {
    const params = useParams()


    const [items, setItems] = useState([])
    
    useEffect(() => {
        if(items.length === 0) fetchItems(params.category)
    },[])




    const fetchItems = async (items) => {
        const data = await fetch(
            `https://fakestoreapi.com/products/category/${items}`     
             )
        let products = await data.json()
        setItems(products)
    }
    function addToCart(e){
        let index = items.findIndex(itemss => Number(itemss.id) === Number(e.target.dataset.id))
     
       props.addToCart(items[index])
    }

    return (
        <div>
            {items.map(item => (
                <div className='shopCard'  key={item.id} >
                  <Link to={`/shop/${item.id}`} >
                      {item.title}
                    <img className='shop-img' src={item.image}></img>
                    </Link>  
                    <button onClick={addToCart} className='addToCart' data-id={item.id}>Add</button>
                </div>
    ))}
        </div>
    )
}