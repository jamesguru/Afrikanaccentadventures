import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { removePackage } from "../../redux/cartRedux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import {
  Add,
  Remove,
  Close,
  Delete,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import "./cart.css";
import SimpleSlider from "../../components/Slide/Slide";
const Cart = () => {
  const [terms, setTearms] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const openTearms = () => {
    setTearms(true);
  };

  const closeTerms = () => {
    setTearms(false);
  };

  const emptyCart = () => {
    dispatch(removePackage());
    toast.warning("You have emptied your cart.", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleOrder = () => {
    const date = localStorage.getItem("arrivaldate");
    const order = {
      arrivaldate: date,
      packages: cart.products,
      total: cart.total,
    };

    localStorage.setItem("order", JSON.stringify(order));
  };

  const ShowacceptTerms = () => {
    setShowButton(true);
  };

  return (
    <div className="cart">
      <Navbar />

      <div className="cart-background">
        <span className="cart-name">Cart</span>
      </div>

      <div className="cart-container">
        <div className="cart-wrapper">
          <div className="cart-packages">
            <h5>Cart({cart.products.length})</h5>

            <hr />

            {cart.products.length > 0 ? (
              cart.products.map((item, index) => (
                <div>
                  <div className="cart_packages-item">
                    <div className="cart_packages_info">
                      <img src={item.img} alt="" />
                      <div className="cart_packages-item_desc">
                        <span>Package name:{item.title}</span>
                        <span>Quantity: {item.quantity}</span>
                      </div>
                    </div>

                    <span className="cart_package-item_price">
                      ${item.price}
                    </span>
                  </div>

                  <hr />
                </div>
              ))
            ) : (
              <span>Cart is Empty</span>
            )}

            <span className="empty-cart">Empty Cart</span>
            <Delete className="delete" onClick={emptyCart} />
          </div>
          <div className="cart-subtotal">
            <h5>CART SUMMARY</h5>

            <hr />

            <div className="cart-summary">
              <span className="subtotal">Subtotal</span>
              <span className="total">$ {cart.total}</span>
            </div>

            <hr />

            <button onClick={openTearms} disabled={cart.products.length < 1}>
              Checkout ($ {cart.total})
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {terms && (
        <div className="agree-policies">
          <div className="policy">
            <div className="close-terms">
              <Close className="close-icon" onClick={closeTerms} />
            </div>

            <h4>Please read the terms before you proceed</h4>
            <span>
              Service or products offered or sold under Afrikan Accent
              Adventures will be effected once you or your travel agent affirm
              your booking. Then it becomes our responsibility to provide you
              the services required by you and you are responsible for the
              payments. For every case subject to these
              <a to="/policy" className="terms-conditions">
                terms and conditions
              </a>
              .It is imperative that you check the written confirmation when you
              get it. In case you’re booking is within 2 weeks to departure that
              all payments are as you require them inside 3 days. In the event
              that you wish to change or cancel your travel arrangement later
              you may need to pay a amendment or cancelation charge and extra
              costs which might be as much as the entire of the first cost of
              your arrangements.
            </span>

            <div className="tearms">
              <input type="checkbox" onClick={ShowacceptTerms} />

              <span>Agree to terms and conditions.</span>
              <a href="http://localhost:3000/policy">Read more</a>
            </div>

            {showButton && (
              <Link to="/checkout">
                <button onClick={handleOrder}>proceed</button>
              </Link>
            )}
          </div>
        </div>
      )}

      <ToastContainer
        position="right-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
