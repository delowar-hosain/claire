/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { CartItem } from "@/components/index";
import { AppContext } from "@/context/createContext";
import Pages from "@/layouts/Pages";

const ShopingCart: React.FC = () => {
  const { state } = useContext(AppContext);
  const [subTotal, setSubTotal] = useState<number>(0)
  const shoppingCart = state?.cart;

  function updatePrice(price: number) {
    setSubTotal(price + subTotal)
  }
  return (
    <Pages>
      <section className="h-100 h-custom shopping-cart">
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2">
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-4">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {shoppingCart?.length} items
                          </h6>
                        </div>
                        <hr className="my-4" />
                        {shoppingCart?.length > 0 &&
                          shoppingCart?.map((shopCart: any, index: number) => (
                            <CartItem
                              index={index}
                              shopCart={shopCart}
                              key={index.toString()}
                            />
                          ))}
                      </div>
                    </div>
                    {/* <div className="col-lg-4">
                      <div className="card mb-4">
                        <div className="card-header py-3">
                          <h5 className="mb-0">Summary</h5>
                        </div>
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                              Subtotal
                              <span>${state.subTotal}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                              Vat
                              <span>Gratis</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                              <div>
                                <strong>Total amount</strong>
                                <strong>
                                  <p className="mb-0">(including VAT)</p>
                                </strong>
                              </div>
                              <span>
                                <strong>${state.subTotal}</strong>
                              </span>
                            </li>
                          </ul>

                          <button
                            type="button"
                            className="btn btn-primary item-center btn-lg btn-block"
                          >
                            Go to checkout
                          </button>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Pages>
  );
};

export default ShopingCart;
