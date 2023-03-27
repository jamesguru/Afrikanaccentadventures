import React from "react";
import "./blog.css";
import axios from "axios";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebasestore";

import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const [file, setFile] = useState(null);

  const [title, setTitle] = useState([]);

  const [desc, setDesc] = useState("");
  const [metadesc, setMetaDesc] = useState("");

  const [uploading, setUploading] = useState("uploading is 0%");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await publicRequest.get("/blogs/");

        setBlogs(res.data);
      } catch (error) {}
    };

    getBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/blogs/${id}`);

      console.log("deleted successfully");

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "uploads");

    setUploading("uploading");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newBlog = { title: title, desc: desc, metadesc:metadesc, img: url };

      uploadBlog(newBlog);

      setUploading("uploaded 100%");
    } catch (error) {
      console.log(error);

      setUploading("uploading failed");
    }
  };

  const uploadBlog = async (newBlog) => {
    try {
      await publicRequest.post("/blogs/", newBlog);

      window.location.reload();
    } catch (error) {
      console.log("something went wrong");
    }
  };

  console.log(blogs)

  return (
    <div className="promo">
      <div className="promo-detail">
        <h2 className="title-promo"> Blogs</h2>

        {blogs.length &&
          blogs.map((singleBlog) => (
            <div className="promo-container">
              <img
                src={singleBlog.img}
                alt=""
                height="150px"
                width="150px"
              />
            <span>{singleBlog.title}</span>
              <button
                onClick={() => handleDelete(singleBlog._id)}
                className="button"
              >
                Delete
              </button>
            </div>
          ))}
      </div>

      <div className="create-promo">
        <h4 className="title-promo"> Create New Blog</h4>

        <div className="create-promo">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <h4 style={{ color: "green" }}>{uploading}</h4>

          <input
            className="title-input"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog title"
          />
          <textarea
            cols="40"
            rows="5"
            style={{ margin: "20px" }}
            onChange={(e) => setMetaDesc(e.target.value)}
            placeholder="Blog meta description"
          ></textarea>

          <textarea
            cols="40"
            rows="5"
            style={{ margin: "20px" }}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Blog description"
          ></textarea>

          <button className="upload-button" onClick={handleUpload}>
            upload new
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
