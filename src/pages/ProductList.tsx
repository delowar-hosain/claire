/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { realtimeDB } from "@/services/firebase/index";
import { ProductItem } from "@/components/index";
import Pages from "@/layouts/Pages";
const ProductList: React.FC = () => {
  const [allProduct, setAllProduct] = useState<any>([]);

  useEffect(() => {
    onValue(realtimeDB("shProductList"), (snapshot) => {
      let records: any[] = [];
      snapshot.forEach((childRecord) => {
        records.push(childRecord.val());
      });
      setAllProduct(records);
    });
  }, []);
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
                            Product List
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {allProduct.length} items
                          </h6>
                        </div>
                        <hr className="my-4" />
                        {allProduct.length > 0 &&
                          allProduct.map((product: any, index: number) => (
                            <ProductItem
                              index={index}
                              product={product}
                              key={index.toString()}
                            />
                          ))}
                      </div>
                    </div>
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

export default ProductList;
