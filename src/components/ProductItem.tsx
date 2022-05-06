import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "@/context/createContext";
import { upArrowSvg, downArrowSvg } from "../config/svg";
import { CartItem } from "@/interface/index";
import Variants from "@/components/products/variants";
import Option from "@/components/products/option";

const ProductItem: React.FC<{
  index: number;
  product: any;
}> = ({ index, product }) => {
  const [qty, setQty] = useState<number>(1);
  const [selectOption, setOption] = useState<string>("");
  const [selectVariant, setVariant] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const { state, addToCart } = useContext(AppContext);
  function increaseQty() {
    setQty(qty + 1);
  }

  function decreaseQty() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  useEffect(() => {
    setPrice(product.variants[checkVariant()]?.price);
  }, [selectVariant]);

  function checkVariant(): number {
    let objIndex: number = product.variants.findIndex(
      (el: any) => el.id === selectVariant
    );
    if (objIndex !== -1) {
      return objIndex;
    } else {
      return 0;
    }
  }

  function checkQty() {
    let objIndex: number = state.cart.findIndex(
      (el: CartItem) =>
        el.id === Number(product.id) && el.variants === selectVariant
    );
    if (objIndex !== -1) {
      return state.cart[objIndex].qty + qty;
    } else {
      return qty;
    }
  }

  function addCart(product: any) {
    const cart: CartItem = {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      id: product.id,
      options: selectOption,
      variants: selectVariant,
      qty: checkQty(),
    };
    addToCart(cart);
  }
  return (
    <div className="row py-4 d-flex justify-content-between align-items-center mb-3 bg-body cart-item">
      <div className="col-3 col-md-2 col-lg-2 col-xl-2">
        <img
          src={product.images[0]?.src}
          className="img-fluid rounded-3"
          alt={product.title}
        />
      </div>
      <div className="col-9 col-md-10 col-lg-10 col-xl-10">
        <div className="row">
          <div className="col-10 col-lg-11 col-xl-11">
            <h4 className="text-black mb-0"> {product.title}</h4>
            <h6 className="text-muted">{product.body_html}</h6>
          </div>
          <div className="col-2 col-lg-1 col-xl-1"></div>
        </div>
        <div className="row">
          <div className="col-8 col-lg-8 col-xl-8 d-flex">
            <h6 className="mb-0">
              QTY
              <span className="my-3 mx-4 qty btn btn-sm fw-bold rounded-pill">
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
          <div className="col-4 col-lg-4 col-xl-4">
            <h6 className="mb-0 float-start p-2 m-2">${price}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 col-lg-7 col-xl-7 d-flex">
            <span className="p-2">Options:</span>
            <div className="d-flex flex-wrap">
              {product.options?.values.map((option: string, index: number) => (
                <Option
                  index={index}
                  selectedOption={selectOption}
                  setSelected={() => setOption(option)}
                  option={option}
                  key={index.toString()}
                />
              ))}
            </div>
          </div>
          <div className="col-sm-4 col-lg-5 col-xl-5 d-flex">
            <span className="p-2">Variants:</span>
            <div className="d-flex flex-wrap">
              {product.variants.map((varient: any, index: number) => (
                <Variants
                  index={index}
                  selectedIndex={selectVariant}
                  setSelected={() => setVariant(varient.id)}
                  option={varient}
                  key={index.toString()}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8 col-lg-10 col-xl-10 text-center">
            <button
              className="btn btn-sm p-2 m-2 btn-danger"
              onClick={() => addCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
