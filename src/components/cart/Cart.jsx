import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, updateBurger, updateCart, deleteBurger } from "../../redux/burgerSlice";


const CartItem = ({ item }) => {
  const { useRef, title, price, qty, burgerSrc, id } = item;
  const [quantity, setQty] = useState(qty);
  const dispatch = useDispatch();
  const update = (action) => {
    if (action === 'increment'){ setQty(quantity + 1) }
    if (action === 'decrement'){ setQty(quantity > 0 ? quantity - 1 : 0) }
    dispatch(updateCart(id, qty))
  }

  useEffect(() => {
    dispatch(updateCart(id, quantity))
  }, [quantity] )

    return(
  <div className="cartItem">
    <div>
      <h4>{item.title}</h4>
      <img src={burgerSrc} alt={item.title} />
    </div>

    <div>
      <button onClick={() => {update('decrement')}}>
        -
      </button>
      <input type="number" readOnly value={quantity} />
      <button onClick={() =>  {update('increment')}}>
        +
      </button>
    </div>
  </div>
  )
};

const Cart = () => {
  const burgers = useSelector((state) => state.burgerReducer.burgers);
  const [subTotal, setSubTotal] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const shipping = 10.0;

  useEffect(() => {
    let totals = burgers.map(item => {
      return item?.qty * item?.price;
    });
    setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0));
    setTotal(subTotal + shipping);
    }, [burgers, subTotal, total]);
    
  return (
    
    <section className="cart">
      <main>
        
        {burgers.map((burger) => {
            return <CartItem item={burger} />
          })}
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>€{subTotal}</p>
          </div>
          <div>
            <h4>TVA</h4>
            <p>€{(subTotal/6).toFixed(1)}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>€{shipping}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>€{total}</p>
          </div>
          <Link to="/shipping">Payer</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
