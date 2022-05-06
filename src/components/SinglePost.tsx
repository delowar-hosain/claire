/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
const SinglePost: React.FC<{
  singlePost: any;
  handlePostClick: (id: number) => void;
}> = ({ singlePost, handlePostClick }) => {
  const tags = (Tags: any) => {
    let tagName = "";
    // eslint-disable-next-line array-callback-return
    Tags.map((tag: any, index: number) => {
      if (index === 0) {
        tagName += tag.name;
      } else {
        tagName = tagName + " and " + tag.name;
      }
    });
    return tagName;
  };
  return (
    <div className="card">
      <div className="content-block post-grid post-grid-transparent post-overlay-bottom">
        <div className="post-thumbnail">
          <img
            className="w-100 img-fluid"
            src={singlePost.post_thumbnail}
            alt="Post Images"
          />
        </div>
        <div className="post-grid-content">
          <div className="post-content">
            <div className="post-cat">
              <div className="post-cat-list">
                <a
                  className="hover-flip-item-wrapper text-decoration-none"
                  href="#"
                >
                  <span className="hover-flip-item">
                    <span
                      style={
                        singlePost.custom_fields?.header_text_color ===
                        undefined
                          ? { color: "white" }
                          : {
                              color:
                                singlePost.custom_fields?.header_text_color,
                            }
                      }
                    >
                      {tags(singlePost?.taxonomies?.Tags)}
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <h3 className="title">
              <a
                className="text-decoration-none"
                onClick={() => handlePostClick(singlePost.ID)}
                style={
                  singlePost.custom_fields?.header_text_color === undefined
                    ? { color: "white" }
                    : {
                        color: singlePost.custom_fields?.header_text_color,
                      }
                }
              >
                {singlePost.post_title}
              </a>
            </h3>

            <div
              className="mb-1"
              style={
                singlePost.custom_fields?.header_text_color === undefined
                  ? { color: "white" }
                  : {
                      color: singlePost.custom_fields?.header_text_color,
                    }
              }
            >
              By {singlePost.custom_fields?.custom_author}
            </div>
          </div>
        </div>
      </div>
      {/* <img 
src={singlePost.post_thumbnail}
className="card-img-top"
alt="..."
/> */}
      <div className="card-body">
        <p className="card-text">{singlePost.custom_fields?.main_text}</p>
      </div>
    </div>
  );
};

export default SinglePost;
