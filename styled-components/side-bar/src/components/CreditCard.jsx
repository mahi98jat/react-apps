import Form from "./Form";
import { useState } from "react";
const initState = {
  name: "",
  cardnum: "",
  expm: "",
  expy: "",
  cvv: "",
  amount: "",
};
export default function CreditCard() {
  const [details, setDetails] = useState(initState);

  const handleChange = () => {
    //setDetails({...initState, [name]:value});
  };
  const submitHandle = () => {};
  return (
    <Form onSubmit={submitHandle}>
      <input
        onChange={handleChange}
        name="name"
        label="CARD HOLDER Name"
      ></input>
      <input
        onChange={handleChange}
        name="cardnum"
        label="Card Number"
        placeholder="card Number"
      ></input>
      <input onChange={handleChange} name="expm" label="Expiry Month"></input>
      <input onChange={handleChange} name="expy" label="Expiry year"></input>
      <input onChange={handleChange} name="cvv" label="cvv"></input>
      <input
        onChange={handleChange}
        name="amount"
        label="payment Amount:"
      ></input>
      <input value="Pay" type="submit"></input>
    </Form>
  );
}
