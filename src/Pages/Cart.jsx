import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/CartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    console.log("idddd", id);
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items?.length ? (
          <div>
            {items?.map((products, index) => (
              <div className="cartCard" key={index}>
                <img src={products.image} alt={products.title} />
                <div className="cartDetails">
                  <h5>{products.title}</h5>
                  <h5>{products.price}</h5>
                </div>
                <button
                  onClick={() => handleRemove(products.id)}
                  className="btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h3>No items found</h3>
        )}
      </div>
    </div>
  );
};

export default Cart;
