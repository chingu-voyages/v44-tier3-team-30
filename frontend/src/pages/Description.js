import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Description = () => {
  const [blog, setBlog] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  // get blog details
  const getBlogDetail = async () => {
    try {
      const { data } = await axios.get(`/api/ver1/blog/get-blog/${id}`);
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data?.blog.title,
          description: data?.blog.description,
          image: data?.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogDetail();
  }, [id]);

  // input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/ver1/blog/update-blog/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        alert("Blog Updated");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(blog);
  return (
    <>
      {/* {selectedBlog && (
        <div className="description-container">
          <div className="blog-description-title">
            <h2>{selectedBlog.title}</h2>
          </div>
          <div className="blog-description">{selectedBlog.description}</div>
        </div>
      )} */}
      <form onSubmit={handleSubmit}>
        <div className="create-blog-box"
          
        >
          <h2
            
          >
            Create A Post
          </h2>
          <h3
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Title
          </h3>
          <input
          type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            required
          />
          <h3
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Description
          </h3>
          <input
          className="create-blog-box-desc-input"
            type="text"
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <h3
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Image URL
          </h3>
          <input type="text"
            name="image"
            value={inputs.image}
            onChange={handleChange}
            
            required
          />
          <button type="submit" color="primary" variant="contained" className="create-blog-btn">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default Description;
