import React, { useEffect, useState } from "react";
import { useLocation, useOutletContext, Link, Outlet } from "react-router-dom";

import { getProducts } from "../data";

function importAll(r) {
  let images = {};
  console.log(images)
  r.keys().map((item) => (images[item.slice(5, 6)] = []));
  console.log(images)
  r.keys().forEach((item) => images[item.slice(5, 6)].push(r(item)));
  return images;
}
const images = importAll(
  require.context("../imgs", false, /\.(png|jpe?g|svg|webp)$/)
);

export default function Shop() {
  const [count, setCount] = useOutletContext();

  let products = getProducts();

  useEffect(() => {
    console.log(images);
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Shop</h2>
      {products.map((product) => (
        <div>
          <Link to={`/shop/${product.number}`} key={product.number}>
            {product.name}
          </Link>
          <img src={images[product.number][0]}></img>
        </div>
      ))}
      <Outlet />
    </main>
  );
}
