import React from "react";
const CategoryItem: React.FC<{
  index: number;
  post: any;
  handlePostClick: (parentt: number) => void;
}> = ({ index, post, handlePostClick }) => {
  return (
    <div
      key={index.toString()}
      onClick={() => handlePostClick(post.post_name)}
      className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
    >
      <div className="col-auto d-lg-block">
        <img
          src={post.post_thumbnail}
          style={{
            width: "220px",
            height: "200px",
          }}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="col p-4 d-flex flex-column position-static">
        {/* <strong className="d-inline-block mb-2 text-primary">
                          World
                        </strong> */}
        <h3 className="mb-0">{post.post_title}</h3>

        <p className="card-text mb-auto">{post.custom_fields?.preview_text}</p>
        <div className="mb-1 text-muted">
          By {post.custom_fields?.custom_author}
        </div>
        {/* <a href={post.permalink} className="stretched-link">
                          Continue reading
                        </a> */}
      </div>
    </div>
  );
};

export default CategoryItem;
