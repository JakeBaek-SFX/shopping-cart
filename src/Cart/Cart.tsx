import CartItem from "../CartItem/CartItem";
//types
import { CartItemType } from "../App";
//styles
import { Wrapper } from "./Cart.styles";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {cartItems.length === 0 ? <p>No Items in your cart</p> : null}
      {cartItems.map(item => (
        <CartItem />
      ))}
    </Wrapper>
  )
}

export default Cart;