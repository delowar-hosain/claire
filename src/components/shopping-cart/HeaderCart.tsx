import React, { useContext, useEffect, useState } from "react";
import { cart } from "../../config/svg";
import { AppContext } from "../../context/createContext";

const HeaderCart: React.FC = () => {
  const { state } = useContext(AppContext);
  const [cartQty, setCartQty] = useState<number>(0);
  const shoppingCart = state?.cart;
  useEffect(() => {
    if (shoppingCart.length > 0) {
      setCartQty(
        shoppingCart.reduce((accumulator, object) => {
          return accumulator + object.qty;
        }, 0)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <div className="position-relative">
      <img className="m-2" src={cart} width="20" height="20" alt="Delete" />
      <span
        style={{ marginLeft: "-15px" }}
        className="position-absolute top-0 translate-middle badge rounded-pill bg-secondary"
      >
        {cartQty}
      </span>
      Cart
    </div>
  );
};

export default HeaderCart;
