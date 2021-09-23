import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const param = useParams();
  const products = [
    { name: "SmartPhone", price: 30, id: 0 },
    { name: "Watch", price: 20, id: 1 },
    { name: "Shirt", price: 50, id: 2 },
    { name: "Pants", price: 100, id: 3 },
  ];
  let [{ name, price, id }] = products.filter((el) => {
    return el.id == param.id;
  });
  //name === null ? setIsId(true) : setIsId(false);
  //console.log(param.id);
  //console.log(showProduct);
  return (
    <div key={id}>
      <h1>{name}</h1>
      <p> Price:{price}/-</p>
    </div>
  );
}
