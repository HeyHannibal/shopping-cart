import { Link } from "react-router-dom";

function Nav() {
  return (
    <div >
      <ul className="navbar">
          <li className="navLink">
            <Link to="/">Home</Link>
          </li>
          <li className="navLink">
            <Link to="/shop"> Shop Now</Link>
          </li>
          <li className="navLink">
              <Link to='/shopping-cart'>Shopping Cart</Link>
          </li>
      </ul>
    </div>
  );
}

export default Nav;
