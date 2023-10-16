import React, { useRef } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PetsRounded from "@material-ui/icons/PetsRounded";
import "./packagedetail.css";
import Moment from "react-moment";
import { FaClock, FaTag, FaPeopleCarry, FaBed, FaCamera } from "react-icons/fa";
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
import { BsCheckLg, BsXLg } from "react-icons/bs";

const PackageDetail = () => {
  const location = useLocation();

  const id = location.pathname.split("/")[2];
  const topRef = useRef(null);
  const priceRef = useRef(null);
  const [Package, setPackage] = React.useState({});
  const [quantity, setQuantity] = React.useState(1);
  const [selectdates, setSelectDates] = React.useState(false);

  const [adults, setAdults] = React.useState(1);
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
  let price = 0;

  const history = useHistory();
  React.useEffect(() => {
    const getPackage = async () => {
      try {
        const res = await publicRequest.get("/packages/find/" + id);

        setPackage(res.data);
      } catch (error) {}
    };

    getPackage();
  }, [id]);

  console.log(Package);

  const handleClick = () => {
    if (price === 0) {
      setOpen(true);
      scrollToTop();
      setSelectDates(true);
    } else {
      dispatch(
        addPackage({
          ...Package,
          quantity,
          price,
          fullname,
          email,
          phone,
          date,
        })
      );
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
    }
  };

  const handleQuantity = (action) => {
    if (action === "dec") {
      setQuantity(quantity == 0 ? 0 : quantity - 1);
    }

    if (action === "inc") {
      setQuantity(quantity + 1);
    }
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

  const handleProceed = () => {
    setOpen(false);
  };

  const resetPrice = () => {
    price = 0;
    setOpen(false);
  };

  const selectPrice = (numberOfPeople, price) => {
    const selected_price = price * numberOfPeople;
    setSelectedPrice(selected_price);
    scrollToPrice();
  };

  const handleExtraRoom = () => {
    setExtraRoom(!extraRoom);
  };
  console.log(id);

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
          <h1>{Package.title}</h1>
        </div>
      </div>

      <div className="package-details">
        <div className="package-main">
          <div className="top-desc">
            <div className="top-desc-item">
              <FaClock className="icon" />

              <div className="desc-top">
                <h3>Duration</h3>
                <span>{Package.duration}</span>
              </div>
            </div>
            <div className="top-desc-item">
              <FaTag className="icon" />
              <div className="desc-top">
                <div className="desc-top">
                  <h3>Tour type</h3>
                  <span>{Package.tourtype}</span>
                </div>
              </div>
            </div>
            <div className="top-desc-item">
              <FaPeopleCarry className="icon" />
              <div className="desc-top">
                <h3>Group Size</h3>
                <span>{Package.groupsize}</span>
              </div>
            </div>

            <div className="top-desc-item">
              <FaCar className="icon" />
              <div className="desc-top">
                <h3>Transport</h3>

                <ul>
                  {Package.transport?.map((transport) => (
                    <li>
                      <span>{transport}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="package-image">
            <img src={Package.img} alt="" />
          </div>

          <h1 className="big_title">{Package.title}</h1>

          <div className="package-maindetails">
            <span>{Package.desc}</span>
          </div>
        </div>

        <div className="package-side">
          <div className="package-header">
            <h3>Book This Tour</h3>

            <span>
              {" "}
              <span className="red">$ {Package.originalPrice}</span> Per Person
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

              {/* <div className="select-type">
                <label htmlFor="">Adults *</label>
                <select name="" id="" onChange={handleAdults}>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>
                <label htmlFor="">Children(under 18yrs)*</label>
                <select name="" id="" onChange={handleChildren}>
                  <option value="">0</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>
              </div> */}

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

      <div className="bottom-tab">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
          transition
          justify
          variant="pills"
        >
          <Tab eventKey="profile" title="Overview" className="tab">
            <div className="package-map">
              {Package.overview}

              <div className="image-route">
                <img
                  src="https://www.intrepidtravel.com/sites/intrepid/files/elements/product/map/tmpb_2021.jpg"
                  alt=""
                />
                <div className="night-st">
                  <span>Night stops</span>
                  {Package.nightstops?.map((nightstop, index) => (
                    <div className="schedule-item">
                      <div className="day-circle">
                        <div className="price-circle">
                          <span>Day {index + 1}</span>{" "}
                        </div>
                      </div>

                      <div className="day-overview">{nightstop}</div>
                    </div>
                  ))}
                </div>
              </div>

              <hr />

              <div className="tour-feature">
                <h3>Tour Features</h3>
                <div className="feature-body">
                  {Package.tourfeature?.map((tour) => (
                    <div className="feature-item">
                      <PetsRounded className="icon" />
                      <div className="feature-info">
                        <span className="feature-header">{tour.feature}</span>
                        <span>{tour.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="home" title="Itenary" className="tab">
            <div className="package-schedule">
              {Package.itinenary?.map((item, index) => (
                <>
                  <div className="schedule-item">
                    <div className="day-number">
                      {" "}
                      <div className="price-item">
                        <span>Day {index + 1}</span>{" "}
                      </div>
                    </div>

                    <div className="day-overview">
                      <h5>{item.day}</h5>

                      {item.Itinenary}
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          </Tab>
          <Tab eventKey="pricing" title="Rates" className="tab">
            <div className="package-pricing">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Start dates</th>
                    <th>
                      <div className="header-cell">
                        <span>Solo/1 person</span>
                        <span></span>
                      </div>
                    </th>
                    <th>
                      <div className="header-cell">
                        <span>2 people</span>
                        <span></span>
                      </div>
                    </th>
                    <th>
                      <div className="header-cell">
                        <span>3 people</span>
                        <span></span>
                      </div>
                    </th>
                    <th>
                      <div className="header-cell">
                        <span>4 people</span>
                        <span></span>
                      </div>
                    </th>
                    <th>
                      <div className="header-cell">
                        <span>5 people</span>
                        <span></span>
                      </div>
                    </th>
                    <th>
                      <div className="header-cell">
                        <span>6 people</span>
                        <span></span>
                      </div>
                    </th>
                    <th>
                      <div className="header-cell">
                        <span>7+ people</span>
                        <span></span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Package.pricing?.map((item) => (
                    <tr>
                      <td>
                        {
                          <div className="dates-cell">
                            {
                              <Moment
                                date={item.startdate}
                                format="MMM D YYYY"
                              />
                            }

                            <span className="space">-</span>

                            {
                              <Moment
                                date={item.lastdate}
                                format="MMM D YYYY"
                              />
                            }
                          </div>
                        }
                      </td>
                      <td>
                        <div className="pricing-cell">
                          {item.price1.price > 0 ||
                          item.price1.price === undefined ? (
                            <span>${item.price1?.price}</span>
                          ) : (
                            <span>N/A</span>
                          )}

                          {item.price1.price > 0 ? (
                            <span>({item.price1.room} Rooms)</span>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="pricing-cell">
                          {item.price2.price > 0 ||
                          item.price2.price === undefined ? (
                            <span>${item.price2?.price}</span>
                          ) : (
                            <span>N/A</span>
                          )}

                          {item.price2.price > 0 ? (
                            <span>({item.price2.room} Rooms)</span>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="pricing-cell">
                          {item.price3.price > 0 ||
                          item.price3.price === undefined ? (
                            <span>${item.price3?.price}</span>
                          ) : (
                            <span>N/A</span>
                          )}

                          {item.price3.price > 0 ? (
                            <span>({item.price3.room} Rooms)</span>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="pricing-cell">
                          {item.price4.price > 0 ||
                          item.price4.price === undefined ? (
                            <span>${item.price4?.price}</span>
                          ) : (
                            <span>N/A</span>
                          )}

                          {item.price4.price > 0 ? (
                            <span>({item.price4.room} Rooms)</span>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="pricing-cell">
                          {item.price5.price > 0 ||
                          item.price5.price === undefined ? (
                            <span>${item.price5?.price}</span>
                          ) : (
                            <span>N/A</span>
                          )}

                          {item.price5.price > 0 ? (
                            <span>({item.price5.room} Rooms)</span>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="pricing-cell">
                          {item.price6.price > 0 ||
                          item.price6.price === undefined ? (
                            <span>${item.price6.price}</span>
                          ) : (
                            <span>N/A</span>
                          )}

                          {item.price6?.price > 0 && item.price6.room > 0 ? (
                            <span>({item.price6.room} Rooms)</span>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="pricing-cell">
                          <Link to="/design-your-own-safari">
                            <button>Get Quote</button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Tab>
          <Tab eventKey="Accomodation" title="Accomodation" className="tab">
            <div className="package-hotel">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Destination</th>
                    <th>Accomodation</th>
                    <th>Similar Accomodation</th>
                  </tr>
                </thead>
                <tbody>
                  {Package.accomodation?.map((accomodation, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{accomodation.destination}</td>
                      <td>{accomodation.accomodation}</td>
                      <td>{accomodation.similarAccomodation}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Tab>
          <Tab eventKey="inclusions" title="Inclusions" className="tab">
            <div className="package-inclusions">
              <div className="package-inclusions-item">
                <h3>Price Inclusions:</h3>

                {Package.addedvalue?.map((inclusion, index) => (
                  <div className="inclusions-item">
                    <BsCheckLg className="icon" />

                    <span>{inclusion}</span>
                  </div>
                ))}
              </div>

              <div className="package-inclusions-item">
                <h3>Added Value:</h3>

                {Package.exclusions?.map((addedvalue, index) => (
                  <div className="inclusions-item">
                    <BsCheckLg className="icon" />

                    <span>{addedvalue}</span>
                  </div>
                ))}
              </div>

              <div className="package-inclusions-item">
                <h3>Price Exclusions:</h3>

                {Package.exclusions?.map((exclusion) => (
                  <div className="inclusions-item">
                    <BsXLg className="icon" />

                    <span>{exclusion}</span>
                  </div>
                ))}
              </div>
            </div>
          </Tab>
          <Tab eventKey="gallery" title="Gallery">
            <div className="package-gallery">
              <img src={Package.img1} alt=""/>
              <img src={Package.img2} alt="" />
              <img src={Package.img3} alt="" />
              <img src={Package.img4} alt="" />
            </div>
          </Tab>
        </Tabs>
      </div>

      <Footer />

      {open && Package.pricing.length > 0(
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

            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Start dates</th>
                  <th>
                    <div className="header-cell">
                      <span>Solo/1 person</span>
                      <span></span>
                    </div>
                  </th>
                  <th>
                    <div className="header-cell">
                      <span>2 people</span>
                      <span></span>
                    </div>
                  </th>
                  <th>
                    <div className="header-cell">
                      <span>3 people</span>
                      <span></span>
                    </div>
                  </th>
                  <th>
                    <div className="header-cell">
                      <span>4 people</span>
                      <span></span>
                    </div>
                  </th>
                  <th>
                    <div className="header-cell">
                      <span>5 people</span>
                      <span></span>
                    </div>
                  </th>
                  <th>
                    <div className="header-cell">
                      <span>6 people</span>
                      <span></span>
                    </div>
                  </th>
                  <th>
                    <div className="header-cell">
                      <span>7+ people</span>
                      <span></span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Package.pricing?.map((item) => (
                  <tr>
                    <td>
                      {
                        <div className="dates-cell">
                          {<Moment date={item.startdate} format="MMM D YYYY" />}

                          <span className="space">-</span>

                          {<Moment date={item.lastdate} format="MMM D YYYY" />}
                        </div>
                      }
                    </td>
                    <td>
                      <div className="pricing-cell">
                        {item.price1.price > 0 ||
                        item.price1.price === undefined ? (
                          <span>${item.price1?.price}</span>
                        ) : (
                          <span>N/A</span>
                        )}

                        {item.price1.price > 0 ? (
                          <span>({item.price1.room} Rooms)</span>
                        ) : (
                          ""
                        )}
                        {item.price1?.price > 0 && item.price1.room > 0 ? (
                          <button
                            onClick={() =>
                              selectPrice(
                                item.price1.numberOfPeople,
                                item.price1.price
                              )
                            }
                          >
                            Select
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="pricing-cell">
                        {item.price2.price > 0 ||
                        item.price2.price === undefined ? (
                          <span>${item.price2?.price}</span>
                        ) : (
                          <span>N/A</span>
                        )}

                        {item.price2.price > 0 ? (
                          <span>({item.price2.room} Rooms)</span>
                        ) : (
                          ""
                        )}
                        {item.price2?.price > 0 && item.price2.room > 0 ? (
                          <button
                            onClick={() =>
                              selectPrice(
                                item.price2.numberOfPeople,
                                item.price2.price
                              )
                            }
                          >
                            Select
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="pricing-cell">
                        {item.price3.price > 0 ||
                        item.price3.price === undefined ? (
                          <span>${item.price3?.price}</span>
                        ) : (
                          <span>N/A</span>
                        )}

                        {item.price3.price > 0 ? (
                          <span>({item.price3.room} Rooms)</span>
                        ) : (
                          ""
                        )}
                        {item.price3?.price > 0 && item.price3.room > 0 ? (
                          <button
                            onClick={() =>
                              selectPrice(
                                item.price3.numberOfPeople,
                                item.price3.price
                              )
                            }
                          >
                            Select
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="pricing-cell">
                        {item.price4.price > 0 ||
                        item.price4.price === undefined ? (
                          <span>${item.price4?.price}</span>
                        ) : (
                          <span>N/A</span>
                        )}

                        {item.price4.price > 0 ? (
                          <span>({item.price4.room} Rooms)</span>
                        ) : (
                          ""
                        )}
                        {item.price4?.price > 0 && item.price4.room > 0 ? (
                          <button
                            onClick={() =>
                              selectPrice(
                                item.price4.numberOfPeople,
                                item.price4.price
                              )
                            }
                          >
                            Select
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="pricing-cell">
                        {item.price5.price > 0 ||
                        item.price5.price === undefined ? (
                          <span>${item.price5?.price}</span>
                        ) : (
                          <span>N/A</span>
                        )}

                        {item.price5.price > 0 ? (
                          <span>({item.price5.room} Rooms)</span>
                        ) : (
                          ""
                        )}
                        {item.price5?.price > 0 && item.price5.room > 0 ? (
                          <button
                            onClick={() =>
                              selectPrice(
                                item.price5.numberOfPeople,
                                item.price5.price
                              )
                            }
                          >
                            Select
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="pricing-cell">
                        {item.price6.price > 0 ||
                        item.price6.price === undefined ? (
                          <span>${item.price6.price}</span>
                        ) : (
                          <span>N/A</span>
                        )}

                        {item.price6?.price > 0 && item.price6.room > 0 ? (
                          <span>({item.price6.room} Rooms)</span>
                        ) : (
                          ""
                        )}
                        {item.price6?.price > 0 && item.price6.room > 0 ? (
                          <button
                            onClick={() =>
                              selectPrice(
                                item.price6.numberOfPeople,
                                item.price6.price
                              )
                            }
                          >
                            Select
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="pricing-cell">
                        <Link to="/design-your-own-safari">
                          <button>Get Quote</button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="pricing-people" ref={priceRef}>
              <span>Add the number of children if applicable.</span>

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
              <span>On your own room? </span>
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

            {/*{selectdates && (
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
                {Package.pricing?.map((item, index) => (
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
                    <span className="pricing-text">
                      If not the above dates.
                    </span>{" "}
                    <span className="pricing-text"></span>{" "}
                    <span className="pricing-text">
                      ${Package.originalPrice}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>
                            USD ${Package.originalPrice} per adult in a twin
                            share room{" "}
                          </td>
                          <td>
                            {" "}
                            <button
                              className="pricing-button"
                              onClick={() => selectPrice(Package.originalPrice)}
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

              <div className="handle-quantity" >
                <span>Children:</span>

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
              <span>Want your own room? </span>
              <span>From an extra $800</span>
              <input type="checkbox" onClick={handleExtraRoom} />
            </div>

            <div className="proceed-text">
              <span>Get some help?</span>

              <span onClick={resetPrice}>
                Do you want proceed before you select price?
              </span>
            </div>

            <button className="package-pricing-btn" onClick={handleProceed} >
              <span className="total-cost">
                (Total cost: ${totalCost(adults, children)})
              </span>
              Continue
            </button>*/}
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetail;
