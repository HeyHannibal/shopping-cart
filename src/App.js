import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

import Nav from './nav'

import Shop from './components/shop'
import ItemDetail from './components/itemDet'
import Category from './components/category'
import ShopCart from './components/shop-cart'


function App() {

  const [allItems, setAllItems] = useState([])
  const [cart, setCart] = useState([])


  useEffect(() => {
    console.log(cart)
  },[cart])


  function addToCart(item) {
    setCart((prev)=> [...prev, item])
  }

  function removeFromCart(item) {
    let newCart = [...cart]
    let index = newCart.findIndex(allitems => allitems.id === item.id)
    newCart.splice(index,1)
    setCart(newCart)
  }

  return (
    <BrowserRouter>
    <h1>Shop Of Stuff</h1>
    <Nav/>

      <div>
        <h4>:{cart.length}</h4>
      </div>

      <Routes>
        <Route path="/shop" element={<Shop saveAllItemsInApp={setAllItems} addToCart={addToCart}   />} />
         <Route path='/shop/:id' element={<ItemDetail addToCart={addToCart}  items={allItems}/>} /> 
        <Route path='/:category' element={<Category addToCart={addToCart}  />}/>
        <Route path='/shopping-cart' element={<  ShopCart cart={cart} remove={removeFromCart} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
