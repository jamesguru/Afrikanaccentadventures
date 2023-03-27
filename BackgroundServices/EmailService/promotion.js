const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendMail");
const Promo = require("../Models/Promo");
const Newsletter = require("../Models/Newsletter");
const axios = require("axios");
dotenv.config();

const promoEmail = async () => {
  const promos = await Promo.find({ status: 0 });
  const newsletters = await Newsletter.find({ status: 1 });

  if (promos.length > 0) {
    for (let newsletter of newsletters) {
      for (let promo of promos) {
        console.log(promo.image);
        ejs.renderFile(
          "templates/promo.ejs",
          { image: promo.image },
          async (err, data) => {
            let messageoption = {
              from: process.env.EMAIL,
              to: newsletter.email,
              subject: `${promo.title}`,
              html: data,
            };
            await sendMail(messageoption);
          }
        );

        try {
          await axios.put(`http://localhost:5000/api/promotion/${promo._id}`, {
            status: promo.status + 1,
          });
        } catch (error) {}
      }
    }
  }
};

module.exports = promoEmail;
