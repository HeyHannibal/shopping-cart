import "./styles/App.css";

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function App() {
  const [cart, setCart] = useState([]);

  function removeCart(e) {
    let removed = cart.filter((item) => item.name !== e.target.dataset.name);
    setCart(removed);
  }

  return (
    <div id="appDiv">
      <header>
        <p id="phone" className="headerTxt">
          Call guitar factory today: <a href="tel:02 5993 5555">02 5993 5555</a>
        </p>
        <h1 id="headerTitle" className="headerTxt">
          Guitar Factory
        </h1>
        <p id="adress" className="headerTxt">
          3700, Temple St, Pacific, IL 21505
          <LocationOnIcon className="redIcon" />{" "}
        </p>
      </header>
      <nav>
        <ul>
          <li>
            <Link className="navLink" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/shop">
              shop
            </Link>
          </li>
          <li id="cartLink">
            <Link className="navLink" to="/cart">
              <ShoppingCartIcon />
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet context={[cart, setCart, removeCart]} />
    </div>
  );
}

export default App;
