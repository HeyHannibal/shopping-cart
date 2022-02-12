import '../styles/shop.css'
import { useOutletContext, Link, Outlet } from "react-router-dom";
import { getProducts, getCategories } from "../data";
import uniqid from 'uniqid'


export default function Shop() {
  const [cart, setCart, removeCart] = useOutletContext();

  let products = getProducts();
  let categories = getCategories();


  function addToCart(name) {
    let addThis = products.find(item => item.name === name)
    if(cart.find(item => item.name === addThis.name)) {
      let update = cart.findIndex(item => item.name === addThis.name);
      let newCart = [...cart]
      newCart[update]['amount']  += 1
      setCart(newCart)
    } else {
      setCart(prev => [...prev, addThis])
      console.log(cart,'add') 
    }
   
}


  return (
    <main id='shop'>
      <div id='shopNav'>
        <ul>
          <li>
            <Link to='/shop/category/all/all'>See All</Link>
          </li>
        </ul>
        <ul>
          <p>Brands:</p>
          {categories.brands.map((brand) => (
            <li key={uniqid()}>
              <Link to={`/shop/category/brand/${brand}`}>
                {brand}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <p>Body Shape:</p>
          {categories.body.map((bodyshape) => (
            <li key={uniqid()} >
              <Link to={`/shop/category/body/${bodyshape}`}>
                {bodyshape}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <p>Price Range:</p>
          {categories.pricerange.map((price) => (
            <li key={uniqid()}>
              <Link to={`/shop/category/pricerange/${price}`}>
                {price[0]}-{price[1]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet context={[cart,  removeCart, addToCart]} />
    </main>
  );
}
