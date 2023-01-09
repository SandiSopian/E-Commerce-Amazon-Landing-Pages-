import React, { useState } from "react";
import productsCss from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [parent] = useAutoAnimate();

  const [MenuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className={productsCss.container}>
      <img src={Plane} alt="plane png image" />
      <h1>Our Featured Products</h1>

      <div className={productsCss.products}>
        <ul className={productsCss.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioners</li>
          <li onClick={() => filter("foundation")}>Foundations</li>
        </ul>

        <div className={productsCss.list} ref={parent}>
          {MenuProducts.map((product, i) => (
            <div className={productsCss.product}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}</span>
                <p>Shop Now!</p>
              </div>

              <img src={product.img} alt="product images" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
