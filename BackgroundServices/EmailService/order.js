const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendMail");
const Order = require("../Models/Order");
const axios = require("axios");
dotenv.config();

const orderPendingEmail = async () => {
  const orders = await Order.find({ status: 0 });

  if (orders.length > 0) {
    for (let order of orders) {
      console.log(order.type);
      if (order.type === "booknow") {
        ejs.renderFile(
          "templates/booknow.ejs",
          { id: order.uid },
          async (err, data) => {
            let messageoption = {
              from: process.env.EMAIL,
              to: order.email,
              subject: "Your order has been created successfully",
              html: data,
            };
            await sendMail(messageoption);
          }
        );
      } else if (order.type === "diy") {
        ejs.renderFile(
          "templates/diy.ejs",
          { id: order.uid },
          async (err, data) => {
            let messageoption = {
              from: process.env.EMAIL,
              to: order.email,
              subject: "Your order has been created successfully",
              html: data,
            };
            await sendMail(messageoption);
          }
        );
      } else {
        ejs.renderFile(
          "templates/order.ejs",
          { id: order.uid },
          async (err, data) => {
            let messageoption = {
              from: process.env.EMAIL,
              to: order.email,
              subject: "Your order has been created successfully",
              html: data,
            };
            await sendMail(messageoption);
          }
        );
      }

      ejs.renderFile(
        "templates/newOrder.ejs",
        { id: order.uid },

        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "You have new order login to system to see it.",
            html: data,
          };
          await sendMail(messageoption);
        }
      );

      try {
        await axios.put(`http://localhost:5000/api/orders/${order._id}`, {
          status: order.status + 1,
        });
      } catch (error) {}
    }
  }
};

const orderConfirmedEmail = async () => {
  const orders = await Order.find({ status: 3 });

  if (orders.length > 0) {
    for (let order of orders) {
      ejs.renderFile(
        "templates/orderConfirmed.ejs",
        { id: order.uid },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: order.email,
            subject: `Your order ${order._id} has been confirmed.`,
            html: data,
          };

          await sendMail(messageoption);
        }
      );

      try {
        await axios.put(`http://localhost:5000/api/orders/${order._id}`, {
          status: order.status + 1,
        });
      } catch (error) {}
    }
  }
};

const orderDeliveredEmail = async () => {
  const orders = await Order.find({ status: 6 });

  if (orders.length > 0) {
    for (let order of orders) {
      ejs.renderFile(
        "templates/orderDelivered.ejs",
        { id: order.uid },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: order.email,
            subject: "Thank you for touring with Afrikan Accent Adventures",
            html: data,
          };

          await sendMail(messageoption);
        }
      );

      try {
        await axios.put(`http://localhost:5000/api/orders/${order._id}`, {
          status: order.status + 1,
        });
      } catch (error) {}
    }
  }
};

const order = async () => {
  const orders = await Order.find();
};

module.exports = {
  orderPendingEmail,
  orderDeliveredEmail,
  orderConfirmedEmail,
  order,
};
