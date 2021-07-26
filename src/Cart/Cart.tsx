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
  const TotalPrice = (items: CartItemType[]) => (
    items.reduce((ack:number, item) => ack + item.amount * item.price, 0)
  )

  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {cartItems.length === 0 ? <p>No Items in your cart</p> : null}
      {cartItems.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${TotalPrice(cartItems).toFixed(2)}</h2>
    </Wrapper>
  )
}

export default Cart;