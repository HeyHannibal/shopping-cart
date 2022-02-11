import './styles/App.css';

import { useState } from 'react'

import { BrowserRouter, Route, Link, Outlet } from 'react-router-dom'



function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Shop Of Things</h1>
      <p>{count}</p>
      <nav>
        <li>
          <Link to='/shop'>shop</Link>
        </li>
      </nav>

    <Outlet context={[count, setCount]}/> 

    </div>
  );
}

export default App;
