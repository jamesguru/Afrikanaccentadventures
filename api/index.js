const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const cors = require("cors");
app.use(cors());

const app = express();
const userRoute = require("./routes/user");
const promoRoute = require("./routes/promo");
const orderRoute = require("./routes/order");
const activityRoute = require("./routes/activity");
const blogRoute = require("./routes/blog");
const authRoute = require("./routes/auth");
const packagesRoute = require("./routes/packages");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");
const AnnoucementRoute = require("./routes/annoucement");
const newsletterRoute = require("./routes/newsletter");
const mpesaRoute = require("./routes/mpesa");
const pesapalRoute = require("./routes/pesapal");

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("DB connection is successfull");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());


app.use("/api/carts", cartRoute);
app.use("/api/newsletter", newsletterRoute);
app.use("/api/orders", orderRoute);
app.use("/api/packages", packagesRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/promotion", promoRoute);
app.use("/api/activities", activityRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/payment/mpesa", mpesaRoute);
app.use("/api/pesapal", pesapalRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  process.env.PORT
    ? console.log(`Server started on ${process.env.PORT}`)
    : console.log("server started at port 5000");
});
