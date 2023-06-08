import React, {useContext} from "react";
import {Link} from 'react-router-dom'
import { BlogContext } from "../context/BlogContext";

const BlogCard = (props) => {
  const { title, description, image, username, time, id, isUser } = props;
  const { setSelectedBlog } = useContext(BlogContext);

  const handleClick = (id) => {
    setSelectedBlog(id);
  };

  return (
    <div>
      <div class="ag-format-container">
        <div class="ag-courses_box">
          <div class="ag-courses_item">
           
            <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <Link
             to={`/description/${id}`}
               onClick={() => handleClick(id)}
                  >
              <div class="ag-courses-item_title">{title}</div>
              </Link>

              <div class="ag-courses-item_author">
                Author : <div className="ag-courses-item_date">{username}</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default BlogCard;
