const ejs = require("ejs");
const { parse } = require("json2csv");
const sendMail = require("../helpers/sendMail");
const Order = require("../Models/Order");
const axios = require("axios");

const ReportOrderEmail = async () => {
  const orders = await Order.find({ status: 9 });

  if (orders.length > 0) {
    const csv = parse(orders);

    ejs.renderFile("templates/Report.ejs", async (err, data) => {
      let messageoption = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "HI HERE IS YOUR MONTHLY REPORT",
        html: data,

        attachments: [
          {
            filename: "DailyReport.csv",
            content: csv,
          },
        ],
      };

      try {
        await sendMail(messageoption);
      } catch (error) {
        console.log(error);
      }
    });
  }
  for (let order of orders) {
    await axios.put(`http://localhost:5000/api/orders/${order._id}`, {
      status: 8,
    });
  }
};

module.exports = ReportOrderEmail;
