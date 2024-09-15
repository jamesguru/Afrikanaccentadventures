import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Promo from "./pages/Promotion/Promo";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";

import Orders from "./pages/orders/orders";

import Annoucement from "./pages/announcement/Annoucement";
import { useSelector } from "react-redux";
import Gallery from "./components/Gallery/gallery";
import NewGallery from "./pages/newGallery/newGallery";
import Slider from "./pages/slider/slider";
import NewSlider from "./pages/newSlider/newSlider";
import Categories from "./pages/Categories/category";
import Activities from "./pages/Activities/Activities";
import NewActivities from "./pages/NewActivities/NewActivities";
import Activity from "./pages/Activity/Activity";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        {user && (
          <>
            <Topbar />

            <div className="container">
              <Sidebar />

              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>

              <Route path="/orders">
                <Orders />
              </Route>

              <Route path="/annoucement">
                <Annoucement />
              </Route>

              <Route path="/promo">
                <Promo />
              </Route>
              <Route path="/blogs">
                <Blog />
              </Route>

              <Route path="/gallery">
                <Gallery />
              </Route>

              <Route path="/newgallery">
                <NewGallery />
              </Route>

              <Route path="/slider">
                <Slider />
              </Route>

              <Route path="/newslider">
                <NewSlider />
              </Route>

              <Route path="/categories">
                <Categories />
              </Route>

              <Route path="/activities">
                <Activities />
              </Route>

              <Route path="/newactivities">
                <NewActivities />
              </Route>

              <Route path="/activity/:activityId">
                <Activity />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
