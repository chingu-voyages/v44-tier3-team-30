import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "./BlogContext";

const Description = () => {
  const { selectedBlog } = useContext(BlogContext);
  return (
    <>
      {selectedBlog && (
        <div className="description-container">
          <div className="blog-description-title">
            <h2>{selectedBlog.title}</h2>
          </div>
          <div className="blog-description">{selectedBlog.description}</div>
        </div>
      )}
    </>
  );
};

export default Description;
