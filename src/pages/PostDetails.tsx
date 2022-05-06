/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { realtimeDB } from "@/services/firebase/index";
import { SinglePost } from "../components";
import { AppContext } from "@/context/createContext";
import { useParams } from "react-router-dom";
import Pages from "@/layouts/Pages";

const PostDetails: React.FC = () => {
  const { state, addPosts } = useContext(AppContext);
  const [singlePost, setSinglePost] = useState<any | null>(null);
  const params = useParams();
  useEffect(() => {
    if (state?.wpPosts?.length > 0) {
      handlePostClick(String(params?.slug));
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

  const handlePostClick = (slug: string) => {
    // eslint-disable-next-line array-callback-return
    state?.wpPosts?.map((posts: any) => {
      if (posts.post_name === slug) {
        setSinglePost(posts);
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
                    <h1 className="fw-bold mb-0 text-black">{}</h1>
                  </div>
                  {singlePost && (
                    <SinglePost
                      singlePost={singlePost}
                      handlePostClick={() => {
                        console.log("Hello");
                      }}
                    />
                  )}
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

export default PostDetails;
