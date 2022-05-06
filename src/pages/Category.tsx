/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { auth, realtimeDB } from "@/services/firebase/index";
import { CategoryItem } from "../components";
import { AppContext } from "@/context/createContext";
import { useNavigate } from "react-router-dom";
import Pages from "@/layouts/Pages";
const Category: React.FC = () => {
  const { state, addCategory } = useContext(AppContext);
  let navigate = useNavigate();

  const [allCategory, setAllCategory] = useState<any | null>(null);
  const [authUId, setAuthUid] = useState<any | null>(null);

  useEffect(() => {
    console.log('auth', auth)
    setAuthUid(auth)
    if (state?.wpCategories?.length > 0) {
      setAllCategory(state?.wpCategories);
    } else {
      onValue(realtimeDB("wpCategories"), (snapshot) => {
        console.log('category list', snapshot)
        let records: any[] = [];
        snapshot.forEach((childRecord) => {
          records.push(childRecord.val());
        });
        setAllCategory(records);
        addCategory(records);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <Pages>
      <section className="h-100 h-custom category">
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2">
                <div className="card-body p-0">
                  <div className="px-5 pb-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h1 className="fw-bold mb-0 text-black">
                        List of parent category
                      </h1>
                    </div>
                    <>
                      <hr className="my-4" />
                      <ul className="list-group">
                        {allCategory &&
                          allCategory.map(
                            (
                              category: any,
                              index: number
                            ): JSX.Element | undefined => {
                              if (!category.parent)
                                return (
                                  <CategoryItem
                                    handleCategoryClick={(cate: number) => {
                                      navigate("/sub-category/" + cate);
                                    }}
                                    category={category}
                                    index={index}
                                    key={index.toString()}
                                  />
                                );
                            }
                          )}
                      </ul>
                    </>
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

export default Category;
