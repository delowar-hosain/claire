/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { realtimeDB } from "@/services/firebase/index";
import { PostItem } from "../components";
import { AppContext } from "@/context/createContext";
import { useNavigate, useParams } from "react-router-dom";
import Pages from "@/layouts/Pages";

const AllPosts: React.FC = () => {
  const { state, addPosts } = useContext(AppContext);
  const [allPosts, setAllPosts] = useState<any | null>(null);
  const params = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    if (state?.wpPosts?.length > 0) {
      handleSubcategoryClick(Number(params.category));
    } else {
      onValue(realtimeDB("wpPosts"), (snapshot) => {
        let records: any[] = [];
        snapshot.forEach((childRecord) => {
          records.push(childRecord.val());
        });
        addPosts(records);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const handleSubcategoryClick = (cate: number) => {
    let records: any[] = [];
    state?.wpPosts?.forEach((childRecord: any) => {
      if (checkCategory(childRecord?.taxonomies?.Categories, cate)) {
        records.push(childRecord);
      }
    });
    setAllPosts(records);
  };
  function checkCategory(arr: any, name: number): boolean {
    const found = arr.some((el: { term_id: number }) => el.term_id === name);
    if (found) {
      return true;
    } else {
      return false;
    }
  }

  const handlePostClick = (slug: number) => {
    // eslint-disable-next-line array-callback-return
    allPosts.map((posts: any) => {
      if (posts.post_name === slug) {
        if (
          posts.custom_fields?.external_link !== undefined &&
          posts.custom_fields?.external_link
        ) {
          window.open(posts.custom_fields?.external_link, "_blank");
        } else {
          navigate("/post-details/" + slug);
        }
      }
    });
  };
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
                        className="breadcrumb-item btn"
                        onClick={() => setBreadcrumb(1)}
                        aria-current="page"
                      >
                        Category
                      </li>
                        <li
                          className="breadcrumb-item btn active"
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
                        Discover more about
                      </h1>
                    </div>
                    <hr className="my-4" />
                    <ul className="list-group">
                      {allPosts &&
                        allPosts.map(
                          (
                            post: any,
                            index: number
                          ): JSX.Element | undefined => {
                            return (
                              <PostItem
                                index={index}
                                post={post}
                                handlePostClick={handlePostClick}
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

export default AllPosts;
