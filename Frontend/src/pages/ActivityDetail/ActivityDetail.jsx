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

const ActivityDetail = () => {
  const location = useLocation();

  const id = location.pathname.split("/")[2];
  const topRef = useRef(null);
  const priceRef = useRef(null);
  const [Activity, setActivity] = React.useState({});
  const [quantity, setQuantity] = React.useState(1);
  const [adults, setAdults] = React.useState(1);
  const [selectdates, setSelectDates] = React.useState(false);
  const [children, setChildren] = React.useState(0);
  const [fullname, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [date, setDate] = React.useState("");
  const [open, setOpen] = React.useState(true);
  const [selectedPrice, setSelectedPrice] = React.useState(0);
  const [extraRoom, setExtraRoom] = React.useState(false);
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPrice = () => {
    priceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const dispatch = useDispatch();
  let price;
  const history = useHistory();
  React.useEffect(() => {
    const getActivity = async () => {
      try {
        const res = await publicRequest.get("/activities/find/" + id);

        setActivity(res.data);
      } catch (error) {}
    };

    getActivity();
  }, [id]);

  const handleClick = () => {
    if (price === 0) {
      setOpen(true);
      scrollToTop();
      setSelectDates(true);
    } else {
      dispatch(
        addPackage({
          ...Activity,
          quantity,
          price,
          fullname,
          email,
          phone,
          date,
        })
      );
    }
    localStorage.setItem("arrivaldate", date);
    toast.success("Package has been added to basket successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleQuantity = (action) => {
    if (action === "dec") {
      setQuantity(quantity == 0 ? 0 : quantity - 1);
    }

    if (action === "inc") {
      setQuantity(quantity + 1);
    }
  };

  const handleProceed = () => {
    setOpen(false);
  };
  const handleChildrenQuantity = (action) => {
    if (action === "dec") {
      setChildren(children == 0 ? 0 : children - 1);
    }

    if (action === "inc") {
      setChildren(children + 1);
    }
  };
  const handleAdultsQuantity = (action) => {
    if (action === "dec") {
      setAdults(adults == 0 ? 0 : adults - 1);
    }

    if (action === "inc") {
      setAdults(adults + 1);
    }
    console.log(adults);
  };

  const totalCost = (peopleNumber, childrenNumber) => {
    const childrenPrice = 30;

    if (childrenNumber) {
      price = selectedPrice * peopleNumber + childrenNumber * childrenPrice;

      if (extraRoom) {
        price = price + 800;
      }
      return price;
    } else if (isNaN(price)) {
      price = 0;

      return price;
    } else {
      price = selectedPrice * peopleNumber;

      if (extraRoom) {
        price = price + 800;
      }

      return price;
    }
  };

  const handleAdults = (e) => {
    setAdults(e.target.selectedIndex + 1);
  };
  const handleChildren = (e) => {
    setChildren(e.target.selectedIndex);
  };

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "onChange" });
  const resetPrice = () => {
    price = 0;
    setOpen(false);
  };

  const selectPrice = (selected_price) => {
    setSelectedPrice(selected_price);
    scrollToPrice();
  };

  const handleExtraRoom = () => {
    setExtraRoom(!extraRoom);
  };

  return (
    <div>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="package-background">
        <div className="package-title">
          <h1>{Activity.title}</h1>
        </div>
      </div>

      <div className="package-details">
        <div className="package-main">
          <div className="top-desc">
            <div className="top-desc-item">
              <FaClock className="icon" />

              <div className="desc-top">
                <h3>Duration</h3>
                <span>{Activity.duration}</span>
              </div>
            </div>
            <div className="top-desc-item">
              <FaTag className="icon" />
              <div className="desc-top">
                <div className="desc-top">
                  <h3>Tour type</h3>
                  <span>{Activity.tourtype}</span>
                </div>
              </div>
            </div>
            <div className="top-desc-item">
              <FaPeopleCarry className="icon" />
              <div className="desc-top">
                <h3>Group Size</h3>
                <span>{Activity.groupsize}</span>
              </div>
            </div>

            <div className="top-desc-item">
              <FaUser className="icon" />
              <div className="desc-top">
                <h3>Tour Guide</h3>
                <span>{Activity.tourguide} people</span>
              </div>
            </div>
          </div>

          <div className="package-image">
            <img src={Activity.img} alt="" />
          </div>

          <h1 className="big_title">{Activity.title}</h1>
          <div className="package-inclusions">
            <h3>Price Inclusions:</h3>
            <div className="inclusions-item">
              <BsCheckLg className="icon" />

              <span>
                Arrival and departure airport transfers as per itinerary
              </span>
            </div>
            <div className="inclusions-item">
              <BsCheckLg className="icon" />

              <span>Bed and Breakfast accommodation in Nairobi</span>
            </div>

            <div className="inclusions-item">
              <BsCheckLg className="icon" />

              <span>
                Full Board accommodation in the Lodges/Camps whilst on safari as
                indicated on the itinerary
              </span>
            </div>
            <div className="inclusions-item">
              <BsCheckLg className="icon" />

              <span>
                Transportation on 6-seater Safari minivans or 4x4 Land cruiser,
                driven by English-speaking driver/guide (exclusive use of
                vehicle)
              </span>
            </div>
            <div className="inclusions-item">
              <BsCheckLg className="icon" />

              <span>All Park/Reserve entrance fees</span>
            </div>
            <div className="inclusions-item">
              <BsCheckLg className="icon" />

              <span>
                Services of our English-speaking guide or clients Relations
                officers for briefings in Nairobi
              </span>
            </div>
          </div>
          <div className="package-maindetails">
            <h2>Package Details</h2>
            <span>{Activity.desc}</span>
          </div>
        </div>

        <div className="package-side">
          <div className="package-header">
            <h3>Book This Tour</h3>

            <span>
              {" "}
              <span className="red">$ {Activity.originalPrice}</span> Per Person
            </span>
          </div>

          <form action="" onSubmit={handleSubmit(handleClick)}>
            <div className="package-input">
              <input
                type="text"
                placeholder="Your full name"
                id="fullname"
                {...register("fullname", { required: true })}
                className={errors.fullname ? "invalid" : ""}
                onChange={handleFullName}
              />
              {errors.fullname && (
                <span className="error-message">This field is required</span>
              )}

              <input
                type="text"
                placeholder="Your Email"
                id="email"
                {...register("email", { required: true })}
                className={errors.email ? "invalid" : ""}
                onChange={handleEmail}
              />
              {errors.email && (
                <span className="error-message">This field is required</span>
              )}

              <input
                type="text"
                placeholder="Whatsapp number"
                id="phone"
                {...register("phone", { required: true })}
                className={errors.phone ? "invalid" : ""}
                onChange={handlePhone}
              />
              {errors.email && (
                <span className="error-message">This field is required</span>
              )}

              <label htmlFor="">Arrival Date*</label>
              <input
                type="date"
                placeholder="Date of arrival"
                id="date"
                {...register("date", { required: true })}
                className={errors.date ? "invalid" : ""}
                onChange={handleDate}
              />
              {errors.date && (
                <span className="error-message">This field is required</span>
              )}

              <h4>How many of this package do you want?</h4>

              <div className="handle-quantity">
                <Remove
                  className="remove-icon"
                  onClick={() => handleQuantity("dec")}
                />
                <span className="quantity">{quantity}</span>

                <Add
                  className="add-icon"
                  onClick={() => handleQuantity("inc")}
                />
              </div>

              <button className="package-booking-btn">
                <span className="total-cost">
                  Total cost: ${totalCost(adults, children)}
                </span>
                Add to bucket
              </button>
            </div>
          </form>
        </div>
      </div>
      {open && (
        <div className="pricing-modal" ref={topRef}>
          <div className="pricing-container">
            <span className="select-price">
              Please select the price depending on dates you want to travel.
            </span>

            {selectdates && (
              <span className="select-dates">
                Make sure you have selected price before you proceed.
              </span>
            )}
            <div className="pricing-body">
              <Accordion defaultActiveKey="0" className="accordion-pricing">
                <Accordion.Item>
                  <Accordion.Header>
                    <span className="pricing-text">Departing</span>{" "}
                    <span className="pricing-text">Finishing</span>{" "}
                    <span className="pricing-text"></span>{" "}
                    <span className="pricing-text">Total from USD</span>
                  </Accordion.Header>
                </Accordion.Item>
                {Activity.pricing?.map((item, index) => (
                  <Accordion.Item eventKey={index}>
                    <Accordion.Header>
                      <span className="pricing-text">
                        <Moment date={item.startdate} format="ddd DD YYYY" />
                      </span>{" "}
                      <span className="pricing-text">
                        <Moment date={item.lastdate} format="ddd DD YYYY" />
                      </span>{" "}
                      <span className="pricing-text">${item.price}</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover>
                        <tbody>
                          <tr>
                            <td>
                              USD ${item.price} per adult in a twin share room{" "}
                            </td>
                            <td>
                              {" "}
                              <button
                                className="pricing-button"
                                onClick={() => selectPrice(item.price)}
                              >
                                {" "}
                                Select{" "}
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}

                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="pricing-text">Minimum 2 persons.</span>{" "}
                    <span className="pricing-text"></span>{" "}
                    <span className="pricing-text">
                      ${Activity.originalPrice}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>
                            USD ${Activity.originalPrice} per adult in a twin
                            share room{" "}
                          </td>
                          <td>
                            {" "}
                            <button
                              className="pricing-button"
                              onClick={() =>
                                selectPrice(Activity.originalPrice)
                              }
                            >
                              {" "}
                              Select{" "}
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="pricing-people">
              <span>Add the number of people who are travelling.</span>

              <div className="handle-quantity" ref={priceRef}>
                <span>Adults:</span>
                <Remove
                  className="remove-icon"
                  onClick={() => handleAdultsQuantity("dec")}
                />
                <span className="quantity">{adults}</span>

                <Add
                  className="add-icon"
                  onClick={() => handleAdultsQuantity("inc")}
                />
              </div>

              <div className="handle-quantity">
                <span>Children(between 3 - 11 years):</span>

                <Remove
                  className="remove-icon"
                  onClick={() => handleChildrenQuantity("dec")}
                />
                <span className="quantity">{children}</span>

                <Add
                  className="add-icon"
                  onClick={() => handleChildrenQuantity("inc")}
                />
              </div>
            </div>

            <div className="extra-room">
              <span>On your own. </span>
              <span>From an extra $800</span>
              <input type="checkbox" onClick={handleExtraRoom} />
            </div>

            <div className="proceed-text">
              <span>Get some help?</span>

              <span onClick={resetPrice}>
                Do you want proceed before you select price?
              </span>
            </div>

            <button className="package-pricing-btn" onClick={handleProceed}>
              <span className="total-cost">
                (Total cost: ${totalCost(adults, children)})
              </span>
              Continue
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ActivityDetail;
