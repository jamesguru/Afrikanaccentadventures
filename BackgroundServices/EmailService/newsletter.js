const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendMail");

const Newsletter = require("../Models/Newsletter");
const axios = require("axios");
dotenv.config();

const newsletterEmail = async () => {
  const newsletters = await Newsletter.find({ status: 0 });

  if (newsletters.length > 0) {
    for (let newsletter of newsletters) {
      ejs.renderFile(
        "templates/newsletter.ejs",

        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: newsletter.email,
            subject: `THANK YOU FOR SIGNING UP TO OUR NEWSLETTER`,
            html: data,
          };
          await sendMail(messageoption);
        }
      );

      try {
        await axios.put(
          `http://localhost:5000/api/newsletter/${newsletter._id}`,
          {
            status: newsletter.status + 1,
          }
        );
      } catch (error) {}
    }
  }
};

module.exports = newsletterEmail;
