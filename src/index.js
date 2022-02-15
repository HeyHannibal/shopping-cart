import "./styles/index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Landing from "./components/landing";
import Shop from "./components/shop";
import Product from "./components/shop-product";
import Cart from "./components/cart";
import Category from "./components/category";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" exact element={<Landing />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />}>
            <Route path=":shopId" element={<Product />} />
            <Route
              path="category/:categoryname/:categoryselector"
              element={<Category />}
            />
            <Route
              index
              element={<main style={{ padding: "1rem" }}>{<Category />}</main>}
            />
          </Route>
          <Route
            path="*"
            element={
              <div>
                <h4>PAGE NOT FOUND</h4>
                <p>The page you are looking for does not exist. </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
