import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shop from "./components/shop";
import Product from "./components/shop-product";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shop" element={<Shop />}>
            <Route path=":shopId" element={<Product />} />
            <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an Product</p>
              </main>
            }
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
