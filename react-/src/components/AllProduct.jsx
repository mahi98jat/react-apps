import { Link } from "react-router-dom";


export default function AllProduct() {
  const products = [
    { name: "SmartPhone", price: 30, id: 0 },
    { name: "Watch", price: 20, id: 1 },
    { name: "Shirt", price: 50, id: 2 },
    { name: "Pants", price: 100, id: 3 },
  ];
  return (
    <div>
      {" "}
      {products.map(({ name, price, id }) => (
        <div key={id}>
          <h1>
            <Link to={`/products/${id}`}>{name}</Link>
          </h1>
          <p> price:{price}/-</p>
        </div>
      ))}
    </div>
  );
}
