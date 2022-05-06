/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { realtimeDB } from "@/services/firebase/index";
import { CategoryItem } from "../components";
import { AppContext } from "@/context/createContext";
import { useNavigate, useParams } from "react-router-dom";
import Pages from "@/layouts/Pages";

const Subcategory: React.FC = () => {
  const { state, addCategory, addPosts } = useContext(AppContext);
  const [allSubCategory, setAllSubCategory] = useState<any | null>(null);
  const params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (state?.wpCategories?.length > 0) {
      handleCategoryClick(Number(params.parent));
    } else {
      onValue(realtimeDB("wpCategories"), (snapshot) => {
        let records: any[] = [];
        snapshot.forEach((childRecord) => {
          records.push(childRecord.val());
        });
        addCategory(records);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const handleCategoryClick = (parentt: number) => {
    setAllSubCategory(
      state?.wpCategories?.filter(
        (category: { parent: number }) => category.parent === parentt
      )
    );
  };

  const handleSubcategoryClick = (cate: number, name: string) => {
    onValue(realtimeDB("wpPosts"), (snapshot) => {
      let records: any[] = [];
      snapshot.forEach((childRecord) => {
        if (checkCategory(childRecord.val()?.taxonomies?.Categories, cate)) {
          records.push(childRecord.val());
        }
      });
      addPosts(records);
      navigate("/posts/" + cate);
    });
  };
  function checkCategory(arr: any, name: number): boolean {
    const found = arr.some((el: { term_id: number }) => el.term_id === name);
    if (found) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <Pages>
    <section className="h-100 h-custom category">
      <div className="container py-3 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2">
              <div className="card-body p-0">
                <div className="px-5 pb-5">
                  {/* <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li
                        className={
                          breadcrumb === 1
                            ? "breadcrumb-item btn active"
                            : "breadcrumb-item btn"
                        }
                        onClick={() => setBreadcrumb(1)}
                        aria-current="page"
                      >
                        Category
                      </li>
                      {breadcrumb > 1 && (
                        <li
                          className={
                            breadcrumb === 2
                              ? "breadcrumb-item btn active"
                              : "breadcrumb-item btn"
                          }
                          onClick={() => setBreadcrumb(2)}
                          aria-current="page"
                        >
                          Sub Category
                        </li>
                      )}
                      {breadcrumb > 2 && (
                        <li
                          className={
                            breadcrumb === 3
                              ? "breadcrumb-item btn active"
                              : "breadcrumb-item btn"
                          }
                          onClick={() => setBreadcrumb(3)}
                          aria-current="page"
                        >
                          Posts
                        </li>
                      )}
                      {breadcrumb > 3 && (
                        <li
                          className={
                            breadcrumb === 4
                              ? "breadcrumb-item btn active"
                              : "breadcrumb-item btn"
                          }
                          onClick={() => setBreadcrumb(4)}
                          aria-current="page"
                        >
                          Post Details
                        </li>
                      )}
                    </ol>
                  </nav> */}
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">
                      List of subcategory
                    </h1>
                  </div>
                  <hr className="my-4" />
                  <ul className="list-group">
                    {allSubCategory &&
                      allSubCategory.map(
                        (
                          subcategory: any,
                          index: number
                        ): JSX.Element | undefined => {
                          if (subcategory.parent)
                            return (
                              <CategoryItem
                                handleCategoryClick={handleSubcategoryClick}
                                category={subcategory}
                                index={index}
                                key={index.toString()}
                              />
                            );
                        }
                      )}
                  </ul>
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

export default Subcategory;
