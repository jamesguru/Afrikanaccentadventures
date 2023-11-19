import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./booking.css";
import { publicRequest } from "../../requestMethods";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Booking = () => {
  const [packages, setPackages] = useState([]);
  const [inputs, setInputs] = useState({});
  const history = useHistory();
  useEffect(() => {
    const getPackages = async () => {
      try {
        const res = await publicRequest.get("/packages/");

        setPackages(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPackages();
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async () => {
    const orderid = Math.floor(Math.random() * 100000 + 1);

    const id = `AAA${orderid}`;
    const order = { ...inputs, type: "booknow", uid: id };
    await publicRequest.post("/orders/", order);
    history.push("/success");
  };
  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
  } = useForm();

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="booking">
          <div className="book-image">
            <img
              src="https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406__340.jpg"
              alt=""
            />
          </div>

          <div className="book">
            <div className="book-info">
              
                Embark on an adventure with Afrikan Accent Adventures, where you can book your trip and expect a prompt response to tailor your experience. Additional relevant information is provided to enhance your imaginative journey.
            </div>

            <div className="book_item">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="John"
                name="firstname"
                id="firstname"
                {...register("firstname", { required: true })}
                className={errors.firstname ? "invalid" : ""}
                onChange={handleChange}
              />

              {errors.firstname && (
                <span className="error-message">This field is required</span>
              )}

              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                name="lastname"
                id="lastname"
                {...register("lastname", { required: true })}
                className={errors.lastname ? "invalid" : ""}
                onChange={handleChange}
              />
              {errors.lastname && (
                <span className="error-message">This field is required</span>
              )}

              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                placeholder="0727632051"
                name="phone"
                id="phone"
                {...register("phone", { required: true })}
                className={errors.name ? "invalid" : ""}
                onChange={handleChange}
              />

              {errors.phone && (
                <span className="error-message">This field is required</span>
              )}
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                name="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                })}
                className={errors.email ? "invalid" : ""}
                onChange={handleChange}
              />
              {errors.email && errors.email.type === "required" && (
                <span className="error-message">This field is required</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span className="error-message">Invalid email format</span>
              )}
              <label htmlFor="">Country of origin</label>
              <input
                type="text"
                placeholder="Canada"
                name="country"
                id="country"
                {...register("country", { required: true })}
                className={errors.name ? "invalid" : ""}
                onChange={handleChange}
              />
              {errors.country && (
                <span className="error-message">This field is required</span>
              )}
              <label htmlFor="">Date</label>
              <input
                type="date"
                placeholder="2023/01/01"
                id="arrivaldate"
                {...register("arrivaldate", { required: true })}
                className={errors.days ? "invalid" : ""}
                name="arrivaldate"
                onChange={handleChange}
              />
              {errors.arrivaldate && (
                <span className="error-message">This field is required</span>
              )}

              <label htmlFor="">Number of adult</label>
              <input
                type="number"
                placeholder="adult ($50)"
                name="adults"
                id="adults"
                {...register("adults", { required: true })}
                className={errors.days ? "invalid" : ""}
                onChange={handleChange}
              />

              {errors.adults && (
                <span className="error-message">This field is required</span>
              )}
              <label htmlFor="">Number of children</label>
              <input
                type="number"
                placeholder="children ($20)"
                className="booking-input"
                name="children"
                onChange={handleChange}
              />
              <label htmlFor="">Select Safaris</label>

              <select
                name="safaris"
                id=""
                className="booking-select"
                onChange={handleChange}
              >
                {packages.map((item) => (
                  <option value={item.title}>{item.title}</option>
                ))}
              </select>
              <label htmlFor="">Additional information.</label>
              <input
                type="text"
                placeholder="additional information"
                name="additionalinfo"
                id="additionalinfo"
                {...register("additionalinfo", { required: true })}
                className={errors.days ? "invalid" : ""}
                onChange={handleChange}
              />
              {errors.additionalinfo && (
                <span className="error-message">This field is required</span>
              )}

              
              <button>Book</button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Booking;
