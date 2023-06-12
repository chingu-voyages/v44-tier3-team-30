import * as React from "react";
import { teal } from "@mui/material/colors";
import { Box, IconButton, CardHeader, CardMedia, CardContent, Avatar, Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BlogCard({
  title,
  description,
  image,
  username,
  time,
  id,
  isUser,
}) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/description/${id}`);
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/ver1/blog/delete-blog/${id}`);
      if (data?.success) {
        alert("Blog Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card
      sx={{
        width: "40%",
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover:": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      {isUser && (
        <Box display={"flex"}>
          <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
            {/* <ModeEditIcon color="info" /> */}
          </IconButton>
          <IconButton onClick={handleDelete}>
            {/* <DeleteIcon color="error" /> */}
          </IconButton>
        </Box>
      )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe">
            {username}
          </Avatar>
        }
        title={username}
        subheader={time}
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="h4" color="black" >
           {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
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
  );
}