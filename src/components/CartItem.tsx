import React, { useContext, useEffect, useState } from "react";
import { CartItem as CartItemIterface } from "@/interface/index";
import { AppContext } from "@/context/createContext";
import { onValue } from "firebase/database";
import { realtimeDB } from "@/services/firebase/index";

import { upArrowSvg, downArrowSvg, trash } from "../config/svg";
const CartItem: React.FC<{
  index: number;
  shopCart: CartItemIterface;
}> = ({ index, shopCart }) => {
  const [qty, setQty] = useState<number>(shopCart.qty);
  const [cartItem, setCartItem] = useState<any>(null);
  const [price, setPrice] = useState<number>(0);
  const [img, setImg] = useState<string>("");
  const { state, removeFromCart, updateSubTotal } = useContext(AppContext);
  useEffect(() => {
    onValue(realtimeDB("shProductList"), (snapshot) => {
      snapshot.forEach((childRecord) => {
        if (childRecord.val().id === shopCart.id) {
          setCartItem(childRecord.val());
        }
      });
    });
  }, [state]);

  useEffect(() => {
    if (cartItem) {
      setPrice(cartItem.variants[checkVariant()]?.price);
      //updateSubTotal(price * qty);
      // setImg(cartItem.variants[checkVariant()]?.images);
    }
    // } else {
    //   setPrice(product.variants[0]?.price);
    // }
  }, [cartItem]);

  function checkVariant(): number {
    let objIndex: number = cartItem.variants.findIndex(
      (el: any) => el.id === shopCart.variants
    );
    if (objIndex !== -1) {
      return objIndex;
    } else {
      return 0;
    }
  }
  function increaseQty() {
    setQty(qty + 1);
  }

  function decreaseQty() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  function removeToCart(index: number) {
    removeFromCart(index);
  }
  return (
    cartItem && (
      <div className="row py-4 d-flex justify-content-between align-items-center mb-3 bg-body cart-item">
        <div className="col-3 col-md-2 col-lg-2 col-xl-2">
          <img
            src={cartItem.images[0].src}
            className="img-fluid rounded-3"
            // style={{
            //   height: shopCart.images[0]?.height,
            //   width: shopCart.images[0]?.width,
            // }}
            alt={cartItem.title}
          />
        </div>
        <div className="col-9 col-md-10 col-lg-10 col-xl-10">
          <div className="row">
            <div className="col-10 col-lg-11 col-xl-11">
              <h4 className="text-black mb-0"> {cartItem.title}</h4>
              <h6 className="text-muted">{cartItem.body_html}</h6>
            </div>
            <div className="col-2 col-lg-1 col-xl-1">
              <span className="text-danger fw-bold">
                <img
                  src={trash}
                  width="16"
                  height="20"
                  alt="Delete"
                  onClick={() => removeToCart(index)}
                />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-8 col-lg-10 col-xl-10 d-flex">
              <h6 className="mb-0">
                QTY
                <span className="mx-4 qty btn btn-sm fw-bold rounded-pill">
                  {" "}
                  {qty}{" "}
                </span>
              </h6>
              <div className="d-flex flex-column bd-highlight">
                <span onClick={() => increaseQty()} className="btn p-0 m-0">
                  <img src={upArrowSvg} width="16" height="10" alt="up arrow" />
                </span>
                <span onClick={() => decreaseQty()} className="btn p-0 m-0">
                  <img
                    src={downArrowSvg}
                    width="16"
                    height="10"
                    alt="down arrow"
                  />
                </span>
              </div>
            </div>
            <div className="col-4 col-lg-2 col-xl-2">
              <h6 className="mb-0 float-end">${price * qty}</h6>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CartItem;
