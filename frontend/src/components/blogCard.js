import React, {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import { BlogContext } from "../pages/BlogContext";

const BlogCard = (props) => {
  const { title, description, image, username, time, id, isUser } = props;
  const [blogs, setBlogs] = useState([]);
  const { setSelectedBlog } = useContext(BlogContext);

  const handleClick = (props) => {
    setSelectedBlog(props);
  };

  useEffect(() => {
    setBlogs(props);
  }, []);

  return (
    <div>
      <div class="ag-format-container">
        <div class="ag-courses_box">
          <div class="ag-courses_item">
           
            <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <Link
             to={`/description/${id}`}
               onClick={() => handleClick(props)}
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
