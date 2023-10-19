import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import Treading from "../../components/Trending/trending";
import Destination from "../../components/Destinations/Destination";

import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";
import Partner from "../../components/partners/Partner";
import Process from "../../components/booking process/bookingprocess";
import Category from "../../components/Categories/Category";
import Package from "../../components/Packages/Package";
import Newsletter from "../../components/NewsLetter/Newsletter";
import Gallery from "../../components/Gallery/Gallery";
import ShortSafari from "../../components/ShortSafari/ShortSafari";
import Whyus from "../../components/Why us/Whyus";
import SimpleSlider from "../../components/Slide/Slide";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <Category />
      <Package />
      <Destination />
      <Whyus />
      <ShortSafari />
      <Team />
      <Newsletter />
      <Partner />
      <Footer />
    </div>
  );
};

export default Home;
