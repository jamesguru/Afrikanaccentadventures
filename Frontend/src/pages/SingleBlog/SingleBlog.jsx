import React, { useRef } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Moment from "react-moment";
import { BsCheckLg, BsXLg } from "react-icons/bs";
import {
  FaClock,
  FaTag,
  FaPeopleCarry,
  FaUser,
  FaCarAlt,
  FaBed,
  FaCamera,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation, Prompt } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { Remove, Add } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addPackage, removePackage } from "../../redux/cartRedux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import { FaCar, FaHotel, FaUtensilSpoon } from "react-icons/fa";
import "./singleblog.css";

const SingleBlog = () => {
  const location = useLocation();

  const id = location.pathname.split("/")[2];

  
  const topRef = useRef(null);
  const priceRef = useRef(null);
  const [Blog, setBlog] = React.useState({});

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

  React.useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await publicRequest.get("/blogs/find/" + id);

        setBlog(res.data);
      } catch (error) {}
    };

    getBlog();
  }, [id]);

  return (
    <div>
      <Navbar />

      <div className="package-background">
        <div className="package-title">
          <h1>Blog</h1>
        </div>
      </div>

      <div className="blogPage">
        <div className="blogdetails">
          <h2>{Blog.title}</h2>

          <img src={Blog.img} alt={Blog.metadesc} />

          <span>{Blog.desc}</span>
        </div>

        <div className="other-blogs">

          <h3>Other Blog posts</h3>
          {blogs.length &&
            blogs.map((blog) => (

              Blog._id !== blog._id &&

              <Link to={`/blogs/${blog._id}`} >
              <div className="related_blog">
                
                  <img src={blog.img} alt="" />
                  <span>{blog.title}</span>
               
              </div>

              </Link>
              
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleBlog;
