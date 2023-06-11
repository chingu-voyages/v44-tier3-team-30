import React, {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import { BlogContext } from "../pages/BlogContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Card from "@mui/material/Card"
import {red, teal} from "@mui/material/colors"
import { Avatar, Box, CardContent, CardHeader, CardMedia, IconButton, Typography,} from "@mui/material";

const BlogCard = (props) => {
  const { title, description, image, username, time, id, isUser } = props;
  const [blogs, setBlogs] = useState([]);
  const { setSelectedBlog } = useContext(BlogContext);

  const handleClick = (props) => {
    setSelectedBlog(props);
    console.log(username)
  };

  
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/ver1/blog/delete-blog/${id}`);
      if (data?.success) {
        alert("Blog Deleted");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  
  const handleEdit = () => {
    navigate(`/description/${id}`);
  };

  useEffect(() => {
    setBlogs(props);
  }, []);

  return (
    <Card className="card-component"
      sx={{
        width: "40%",
        margin: "auto",
        mt: 2,
        padding: 2,
        bgcolor: "black"
      }}
    >
      
      <CardHeader
        avatar={
          <Avatar color="white" sx={{ bgcolor: teal[500] }}  aria-label="recipe">
            {username}
          </Avatar>
        }
        title={username}
      />
      <CardMedia component="img" height="194" image={image} alt="Blog Image" />
      
     
      <CardContent>
        <Typography variant="h3" color="white" >
        {title}
        </Typography>
        <Typography variant="body2" color="white" sx={{
        
        padding: 2,
        
      }}>
          {description}
        </Typography>
      </CardContent>
      {isUser && (
               <div className="update-delete">
               <button onClick={handleEdit}><img  className="update-btn" src="https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-edit-icon-png-image_313587.jpg"></img></button>
            <button onClick={handleDelete}><img className="delete-btn" src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg"></img></button>
                  
            </div>
             )}
      
    </Card>
    // <div>
    // <Card></Card>
    //   <div class="ag-format-container">
    //     <div class="ag-courses_box">
    //       <div class="ag-courses_item">
           
    //         <div class="ag-courses-item_link">
    //           <div class="ag-courses-item_bg"></div>

    //           <Link
    //          to={`/description/${id}`}
    //            onClick={() => handleClick(props)}
    //               >
    //           <div class="ag-courses-item_title">{title}</div>
    //           </Link>

    //           <div className="blogcard-description">
    //             {description}
    //           </div>

    //           <div class="ag-courses-item_author">
    //             Author : {username}
    //           </div>
    //           <div><img className="blogcard-img" src={image}></img></div>
    //           {isUser && (
    //             <div className="update-delete">
    //             <button onClick={handleEdit}><img  className="update-btn" src="https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-edit-icon-png-image_313587.jpg"></img></button>
    //             <button onClick={handleDelete}><img className="delete-btn" src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg"></img></button>
                  
    //             </div>
    //             )}
              
    //         </div>
            
    //       </div>
    //     </div>
    //   </div>
    //   ;
    // </div>
  );
};

export default BlogCard;
