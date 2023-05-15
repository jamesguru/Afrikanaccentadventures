import { useState, CSSProperties, useCallback,useRef } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./checkout.css";
import { Link } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import ClipLoader from "react-spinners/ClipLoader";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const [inputs, setInputs] = useState({});
  const topRef = useRef(null);
  const order = JSON.parse(localStorage.getItem("order"));
  const date = localStorage.getItem("arrivaldate");
  const [openBankTransfer, setOpenBankTransfer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [pesapal, setPesapal] = useState(false);
  const [mpesa, setMpesa] = useState(false);
  const [status, setStatus] = useState("");
  const [paymentURL, setPaymentURL] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleOrder = async () => {

  
    setOpenModal(true);
    const orderid = Math.floor(Math.random() * 100000 + 1);

    const id = `AAA${orderid}`;
    //localStorage.clear();
    const orderPackage = {
      ...inputs,
      packages: order.packages,
      arrivaldate: date,
      total: order.total,
      type: "prepaid",
      uid: id,
    };
    scrollToTop()
    //   await publicRequest.post("/payment/mpesa/", {
    //  phone: `${inputs.phone}`,
    //  amount: order.total,
    //  }); */

    await publicRequest
      .post("/pesapal/payment", {
        Amount: `${order.total*130}`,
        Description: "E-book purchase",
        Type: "MERCHANT",
        Reference: "12erwe",
        PhoneNumber: `${inputs.phone}`,
      })
      .then((res) => {
        

        setLoading(true);
        setTimeout(() => {
          window.location.replace(res.data);

          setPaymentURL(res.data);
          setOpenModal(false);
          setLoading(false);

          // publicRequest.post("/orders/", orderPackage);
        }, 10000);

        console.log(res.success);
        console.log(res);

        publicRequest.post("/orders/", orderPackage);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleBankTransfer = () => {
    // setOpenBankTransfer(true);
    //setOpenModal(true)
    //setMpesa(false)
    //setPesapal(false)
  };

  const override = {
    margin: "0 auto",
    borderColor: "red",
  };
  const override1 = {
    margin: "0 auto",
    borderColor: "purple",
  };
  const override2 = {
    margin: "0 auto",
    borderColor: "blue",
  };

  const Close = () => {
    setOpenModal(false);
  };
  const handleMpesa = () => {
    //setOpenModal(true)
    setMpesa(!mpesa);
    setPesapal(false);
    //setOpenBankTransfer(false)
  };
  const handlePesapal = () => {
    setPesapal(!pesapal);
    // setOpenModal(true)
    setMpesa(false);
    // setOpenBankTransfer(false)
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  return (
    <div className="checkout">
      <Navbar />
      <div className="checkout-background">
        <span className="checkout-name">Checkout</span>
      </div>
      <form action="" onSubmit={handleSubmit(handleOrder)}>
        <div className="checkout-billing">
          <div className="billing">
            <div className="billing-header"></div>

            <div className="billing-details">
              <h3>Billing details</h3>
              <hr />

              <div className="billing-names">
                <div className="firstname">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="John"
                    id="firstname"
                    {...register("firstname", { required: true })}
                    className={errors.firstname ? "invalid" : ""}
                    onChange={handleChange}
                  />

                  {errors.firstname && (
                    <span className="error-message">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="lastname">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Doe"
                    id="lastname"
                    {...register("lastname", { required: true })}
                    className={errors.lastname ? "invalid" : ""}
                    onChange={handleChange}
                  />
                  {errors.lastname && (
                    <span className="error-message">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <label htmlFor="">Company Name (Optional)</label>
              <input
                type="text"
                name="company"
                placeholder="MVX"
                onChange={handleChange}
              />
              <label htmlFor="">Country of origin </label>
              <input
                type="text"
                name="country"
                placeholder="United States"
                id="country"
                {...register("country", { required: true })}
                className={errors.country ? "invalid" : ""}
                onChange={handleChange}
              />
              {errors.country && (
                <span className="error-message">This field is required</span>
              )}
              <label htmlFor="">Street Address *</label>

              <input
                type="text"
                name="streetaddress"
                placeholder="123 Toronto"
                id="streetaddress"
                {...register("streetaddress", { required: true })}
                className={errors.streetaddress ? "invalid" : ""}
                onChange={handleChange}
              />
              {errors.streetaddress && (
                <span className="error-message">This field is required</span>
              )}
              <label htmlFor="">Postcode / ZIP *</label>
              <input
                type="text"
                name="postcode"
                placeholder="25-5003"
                id="postcode"
                {...register("postcode", { required: true })}
                className={errors.postcode ? "invalid" : ""}
                onChange={handleChange}
              />
              {errors.postcode && (
                <span className="error-message">This field is required</span>
              )}
              <label htmlFor="">Town / City *</label>
              <input
                type="text"
                name="town"
                placeholder="LA"
                id="town"
                {...register("town", { required: true })}
                className={errors.town ? "invalid" : ""}
                onChange={handleChange}
              />
              {errors.town && (
                <span className="error-message">This field is required</span>
              )}
              <label htmlFor="">Whatsapp number *</label>
              <input
                type="number"
                name="phone"
                id="phone"
                {...register("phone", { required: true })}
                className={errors.phone ? "invalid" : ""}
                onChange={handleChange}
              />

              {errors.phone && (
                <span className="error-message">This field is required</span>
              )}
              <label htmlFor="">Email Address *</label>
              <input
                type="text"
                name="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                })}
                className={errors.email ? "invalid" : ""}
                placeholder="johndoe@gmail.com"
                onChange={handleChange}
              />
              {errors.email && errors.email.type === "required" && (
                <span className="error-message">This field is required</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span className="error-message">Invalid email format</span>
              )}
              <input
                type="text"
                placeholder="username"
                
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="additional-information">
            <h3>Additional Information</h3>
            <hr />

            <label htmlFor="">Your Comment (Optional)</label>
            <textarea name="comment" onChange={handleChange}></textarea>

            <div className="preview-order">
              <h3>Preview Order</h3>
              <hr />
            </div>

            <div className="selected-tours">
              <div className="selected-tours-item">
                <h3>Selected Tours</h3>
                <h3>Total Price</h3>
              </div>

              <hr />
              <div>
                {order &&
                  order.packages?.map((item) => (
                    <div className="selected-tours-item">
                      <img src={item.img} alt="" />
                      <h3>
                        {item.title} ({item.duration})  x  {item.quantity}
                      </h3>
                      <h3>${item.originalPrice}</h3>
                    </div>
                  ))}
              </div>

              <hr />
              <div className="selected-tours-item">
                <h3>Subtotal</h3>
                <h3>${order && order.total}</h3>
              </div>

              <hr />
              <div className="selected-tours-item">
                <h3>Total</h3>
                <h3>${order && order.total}</h3>
              </div>

              <div className="payment-options">
                <h4>Payment options</h4>
                <div className="payment-options-item">
                  <input type="checkbox" onClick={handleMpesa} />
                  <h2>Mpesa</h2>
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>

                {mpesa && (
                  <span>You have selected M-pesa as mode of payment</span>
                )}

                <div className="payment-options-item">
                  <input type="checkbox" onClick={handleBankTransfer} />
                  <h2>Bank Transfer</h2>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div className="payment-options-item">
                  <input type="checkbox" onClick={handlePesapal} />
                  <h2>Pesapal</h2>
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                {pesapal && (
                  <span>You have selected Pesapal as mode of payment</span>
                )}
              </div>

              <button className="pay">Place Order</button>
            </div>
          </div>
        </div>
      </form>
      {openModal && (
        <div className="bank_transfer" ref={topRef}>
          <div className="bank_transfer-item">
            <div className="close">
              <button onClick={Close}>Close</button>
            </div>
            {openBankTransfer && (
              <div className="bank_transfer-input">
                <h4>Bank Transfer information.</h4>

                <label htmlFor="">Full Name</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="text" />
                <button>submit</button>
              </div>
            )}

            <div className="loading">
              <ClipLoader
                color={"#ff4838"}
                loading={loading}
                cssOverride={override}
                size={70}
                aria-label="Loading Spinner"
                data-testid="loader"
              />

              <ClipLoader
                color={"#FF7BA9"}
                loading={loading}
                cssOverride={override1}
                size={70}
                aria-label="Loading Spinner"
                data-testid="loader"
              />

              <ClipLoader
                color={"blue"}
                loading={loading}
                cssOverride={override2}
                size={70}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>

            <span>Please wait. This might take a few seconds ...</span>

            <span>You are about to be redirected to payment page.</span>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Checkout;
