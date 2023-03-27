import React from "react";
import { Visibility, Close } from "@material-ui/icons";
import "./orders.css";

import axios from "axios";

import { useEffect, useState } from "react";

import { format } from "timeago.js";
import { publicRequest } from "../../requestMethods";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [modal, setModal] = useState(false);
  const [packages, setPackages] = useState([]);
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [currency, setCurrency] = useState("");
  const [parks, setParks] = useState("");
  const [accomodation, setAccomodation] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await publicRequest.get("/orders/");

        setOrders(res.data);
      } catch (error) {
        console.log("something went wrong");
      }
    };

    getOrders();
  }, []);

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/orders/${id}`);

      window.location.reload();
    } catch (error) {
      console.log("deleted successfully");
    }
  };

  const handleUpdate = async (id, status) => {
    try {
      await publicRequest.put(`/orders/${id}`, { status: status + 2 });

      window.location.reload();
    } catch (error) {
      console.log("update went wrong");
    }
  };

  const handleStatus = (status) => {
    if (status === 0 || status === 1) {
      return "pending";
    } else if (status === 3 || status === 2) {
      return "confirmed";
    } else if (status === 4 || status === 5 || status === 6) {
      return "Delivered";
    } else {
      return "Reviewed";
    }
  };

  const handleModal = (
    packages,
    date,
    email,
    info,
    adults,
    children,
    currency,
    parks,
    accomodation,
    comment
  ) => {
    setModal(true);

    setPackages(packages);
    setEmail(email);
    setInfo(info);
    setAdults(adults);
    setChildren(children);
    setCurrency(currency);
    setParks(parks);
    setAccomodation(accomodation);
    setComment(comment);
    setDate(date)
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="tableContainer">
        <div>
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Country</th>
              <th>Town</th>
              <th>Street Address</th>

              <th>Total</th>

              <th>Time</th>

              <th>Status</th>

              <th>Order quantity</th>

              <th>View Details</th>

              <th>order Type</th>

              <th>Delete</th>

              <th>Confirm</th>
            </tr>

            {orders.map((order) => (
              <tr>
                <td>{order.firstname}</td>
                <td>{order.lastname}</td>
                <td>{order.phone}</td>
                <td>{order.country}</td>
                <td>{order.town ? order.town : "N/A"}</td>
                <td>{order.streetaddress ? order.streetaddress : "N/A"}</td>

                <td>
                  {" "}
                  {order.total ? `$ ${order.total}` : `Budget ${order.budget}`}
                </td>

                <td>{format(order.createdAt)}</td>

                <td>
                  <button
                    disabled
                    className={order.status === 0 ? "pending" : "confirmed"}
                  >
                    {handleStatus(order.status)}
                  </button>
                </td>

                <td>{order.packages.length ? order.packages.length : "N/A"}</td>

                <td>
                  {" "}
                  <Visibility
                    onClick={() =>
                      handleModal(
                        order.packages,
                        order.arrivaldate,
                        order.email,
                        order.additionalinfo,
                        order.adults,
                        order.children,
                        order.currency,
                        order.parks,
                        order.accomodation,
                        order.comment
                      )
                    }
                  />
                </td>
                <td>{order.type}</td>
                <td>
                  <button
                  className="action_btn"
                    onClick={() => handleDelete(order._id)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      cursor: "pointer",
                      border: "none",
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  {order.status < 7 ? (
                    <button

                    className="action_btn"
                      onClick={() => handleUpdate(order._id, order.status)}
                      style={{
                        backgroundColor: "teal",
                        color: "white",
                        cursor: "pointer",
                        border: "none",
                      }}
                    >
                      next
                    </button>
                  ) : (
                    "Delivered"
                  )}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      {modal && (
        <div className="modal-model">
          <div className="modal-packages">
            <div className="close">
              <Close className="close-icon" onClick={closeModal} />
            </div>

            <div className="packages">
              <h3>Order Details</h3>

              <ol>
                {packages?.map((item, index) => (
                  <>
                    <li>
                      <div className="package-item">
                        <img
                          src={item.img}
                          alt=""
                          height="100px"
                          width="100px"
                        />

                        <h5>Package Name:{item.title}</h5>

                        <h5>Quantity: {item.quantity}</h5>

                        <h5>Arrival Date: {item.date}</h5>
                      </div>
                    </li>
                   
                  </>
                ))}
              </ol>
              <h4>Additional Information</h4>
                    <ul>
                      <li>ArrivalDate: {date}</li>
                      <li>Email:{email}</li>
                      <li>Comment:{comment}</li>
                      <li>Additional Information:{info}</li>
                      <li>Number of Adults:{adults}</li>
                      <li>Number of Children:{children}</li>
                      <li>Currency:{currency}</li>
                      <li>Parks:{parks}</li>
                      <li>Accomodation:{accomodation}</li>
                    </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
