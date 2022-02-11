import './styles/App.css';

import { useState } from 'react'

import { BrowserRouter, Route, Link, Outlet } from 'react-router-dom'

import { getBrands } from "./data";


function App() {

  const [cart, setCart] = useState([])

  function removeCart(e) {
      let removed = cart.filter(item => item.name !== e.target.dataset.name)
       setCart(removed)
  }

  return (
    <div>
      <h1>Shop Of Things</h1>
      
      <nav>
        <li>
          <Link to='/shop'>shop</Link>
        </li>
        <li>
          <Link to='/cart'>cart</Link>
        </li>
      </nav>

    <Outlet context={[cart, setCart, removeCart]}/> 

    </div>
  );
}

export default App;
