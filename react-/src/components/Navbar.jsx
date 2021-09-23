import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        backgroundColor: "gray",
        borderBottom: "3px solid black",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/products">All Porducts</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/payment">Payment Page</Link>
    </div>
  );
}
