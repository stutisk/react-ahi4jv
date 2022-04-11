import "./styles.css";
import {useCart} from "./CartContext";


export function Cart() {
  const {item} = useCart();
  return <h1> Items in cart {item} </h1>
}
