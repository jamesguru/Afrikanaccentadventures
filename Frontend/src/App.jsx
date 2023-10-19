import "./app.scss";
import Home from "./pages/home/Home";
import ScrollToTop from "./components/ScrollToTop/scrollToTop";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Booking from "./pages/booking/Booking";
import Gallery from "./pages/gallery/Gallery";
import Wheretogo from "./pages/whereToGo/Wheretogo";
import Activities from "./pages/activities/Activities";
import Blog from "./pages/blog/Blog";
import About from "./pages/About/About";
import PackageDetail from "./pages/packagedetail/PackageDetail";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Tanzania from "./pages/Tanzania/Tanzania";
import Kenya from "./pages/Kenya/Kenya";
import Uganda from "./pages/Uganda/Uganda";
import Rwanda from "./pages/Rwanda/Rwanda";
import DIY from "./pages/DIY/DIY";
import Contact from "./pages/Contact/Contact";
import CulturalSafaris from "./pages/CulturalSafaris/CulturalSafaris";
import FamilyHolidays from "./pages/FamilyHolidays/FamilyHolidays";
import GroupHolidays from "./pages/GroupHolidays/GroupHolidays";
import GorillaTrekking from "./pages/GorillaTrekking/GorillaTrekking";
import LuxuryAfricaSafaris from "./pages/LuxuryAfricaSafaris/LuxuryAfricaSafaris";
import Success from "./pages/Success/Success";
import Policy from "./pages/policy/Policy";
import PackageList from "./pages/PackageList/PackageList";
import TravelWithUs from "./pages/TravelWithUs/TravelWithUs";
import ActivityDetail from "./pages/ActivityDetail/ActivityDetail";
import HoneyMoons from "./pages/HoneyMoons/HoneyMoon";
import FlyInSafaris from "./pages/FlyInSafaris/FlyInSafaris";
import TravelGuideKenya from "./pages/TravelKenya/TravelGuideKenya";
import TravelGuideTanzania from "./pages/TravelTanzania/TravelGuideTanzania";
import TravelGuideUganda from "./pages/TravelUganda/TravelGuideUganda";
import TravelGuideRwanda from "./pages/TravelRwanda/TravelGuideRwanda";
import TravelGuideNamibia from "./pages/TravelNamibia/TravelGuideNamibia";
import TravelGuideBotswana from "./pages/TravelBotswana/TravelGuideBotswana";
import TravelGuideSouthAfrica from "./pages/TravelSouthAfrica/TravelGuideSouthAfrica";
import Namibia from "./pages/Namibia/Namibia";
import SouthAfrica from "./pages/South Africa/SouthAfrica";
import Botswana from "./pages/Botswana/Botswana";
import SingleBlog from "./pages/SingleBlog/SingleBlog";

const App = () => {
  return (
    <div>

      <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/booking">
          <Booking />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/wheretogo">
          <Wheretogo />
        </Route>
        <Route exact path="/activities">
          <Activities />
        </Route>
        <Route exact path="/safaris/:destination">
          <PackageList />
        </Route>

        <Route exact path="/blog">
          <Blog />
        </Route>

        <Route exact path="/package/:id">
          <PackageDetail />
        </Route>
        <Route exact path="/activity/:id">
          <ActivityDetail />
        </Route>
        <Route exact path="/blogs/:id">
          <SingleBlog />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>

        <Route exact path="/destination/tanzania">
          <Tanzania />
        </Route>
        <Route exact path="/destination/kenya">
          <Kenya />
        </Route>
        <Route exact path="/destination/uganda">
          <Uganda />
        </Route>
        <Route exact path="/destination/rwanda">
          <Rwanda />
        </Route>
        <Route exact path="/destination/tanzania">
          <Tanzania />
        </Route>
        <Route exact path="/destination/namibia">
          <Namibia />
        </Route>
        <Route exact path="/destination/southafrica">
          <SouthAfrica />
        </Route>
        <Route exact path="/destination/botswana">
          <Botswana />
        </Route>
        <Route exact path="/design-your-own-safari">
          <DIY />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/cultural-safaris">
          <CulturalSafaris />
        </Route>
        <Route exact path="/family-holidays">
          <FamilyHolidays />
        </Route>
        <Route exact path="/group-holidays">
          <GroupHolidays />
        </Route>
        <Route exact path="/gorilla-trekking">
          <GorillaTrekking />
        </Route>
        <Route exact path="/luxury-africa-safaris">
          <LuxuryAfricaSafaris />
        </Route>
        <Route exact path="/honey-moons">
          <HoneyMoons />
        </Route>
        <Route exact path="/fly-in-safaris">
          <FlyInSafaris />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>

        <Route exact path="/policy">
          <Policy />
        </Route>
        <Route exact path="/travel-with-us">
          <TravelWithUs />
        </Route>
        <Route exact path="/travel-guide-kenya">
          <TravelGuideKenya />
        </Route>
        <Route exact path="/travel-guide-tanzania">
          <TravelGuideTanzania />
        </Route>
        <Route exact path="/travel-guide-uganda">
          <TravelGuideUganda />
        </Route>

        <Route exact path="/travel-guide-rwanda">
          <TravelGuideRwanda />
        </Route>
        <Route exact path="/travel-guide-namibia">
          <TravelGuideNamibia />
        </Route>
        <Route exact path="/travel-guide-Botswana">
          <TravelGuideBotswana />
        </Route>
        <Route exact path="/travel-guide-southafrica">
          <TravelGuideSouthAfrica />
        </Route>
            
      </Switch>
      </Router>
    </div>
  );
};

export default App;
