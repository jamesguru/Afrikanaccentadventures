import "./blog.css";

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { publicRequest } from "../../requestMethods";
import {Link} from 'react-router-dom'

const Blog = () => {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await publicRequest.get("/blogs/");

        setBlogs(res.data);
      } catch (error) {}
    };

    getBlogs();
  });
  return (
    <>
      <Navbar />

      <div className="cart-background">
        <span className="cart-name">Read our blogs here.</span>
      </div>

      <div className="blog">
        {blogs?.map((blog) => (
          <div className="blog-item">
            <h2>{blog.title}</h2>
            <img src={blog.img} alt={blog.metadesc} />
            <span>{blog.metadesc}</span>

            <Link to={`/blogs/${blog._id}`} >
              <button>read more</button>
              
              </Link>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Blog;
