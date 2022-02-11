import React, { useEffect, useState } from "react";
import { useLocation, useOutletContext, Link, Outlet } from "react-router-dom";

import { getProducts, getCategories } from "../data";
import uniqid from 'uniqid'

export default function Shop() {
  const [cart, setCart, removeCart] = useOutletContext();

  let products = getProducts();
  let categories = getCategories()

  useEffect(() => {
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Shop</h2>
      
      <ul>
        Brands:
        {categories.brands.map((brand) => (
          <li key={uniqid()}>
            <Link to={`/shop/category/brand/${brand}`}>
              {brand}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
          Body Shape:
        {categories.body.map((bodyshape) => (
          <li key={uniqid()} >
            <Link to={`/shop/category/body/${bodyshape}`}>
              {bodyshape}
            </Link>
          </li>
        ))}
      </ul>
        <Link to='/shop/category/all/all'>All Guitars</Link>
        <ul>
          Price Range:
        {categories.pricerange.map((price) => (
          <li key={uniqid()}>
            <Link to={`/shop/category/pricerange/${price}`}>
              {price[0]}-{price[1]}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet context={[cart, setCart, removeCart]}/>
    </main>
  );
}


// function importAll(r) {
//   let images = {};
//   r.keys().map((item) => (images[item.slice(5, 6)] = []));
//   r.keys().forEach((item) => images[item.slice(5, 6)].push(r(item)));
//   return images;
// }
// const images = importAll(
//   require.context("../imgs", false, /\.(png|jpe?g|svg|webp)$/)
// );


///{products.map((product) => (
///  <div>
///    <Link to={`/shop/${product.number}`} key={product.number}>
///      {product.name}
///    </Link>
///    <img src={product['images'][0]}></img>
///  </div>
///))}