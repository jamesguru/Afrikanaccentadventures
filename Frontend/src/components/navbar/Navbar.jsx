import { Email, Phone, ShoppingBasket } from "@material-ui/icons";
import {Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { useState } from "react";
import "./navbar.scss";
import { useSelector} from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar-normal scrolled" : "navbar-normal"}>
      <div className="uppercontainer">
        <div className="navbar-email">
          <Email />
          <span>booking@afrikanaccentadventures.com</span>
        </div>
        <div className="navbar-phone">
          <Phone />
          <span>+254-20-200-1410</span>
        </div>
      </div>
      <div className="container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dap91fhxh/image/upload/v1712814222/1712813298642_ybr2e9.jpg"
            alt="main logo for afrikan accent adventures"
            className="logo"
          />
        </Link>

        <div className="center">
          <Navbar bg="" expand="lg" variant="light" className="navbar">
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>

                <Nav.Link href="#" className="link-nav">
                  <Link to="/">Home</Link>
                </Nav.Link>

                <Link>
                  <NavDropdown
                    title="Why us"
                    id="basic-nav-dropdown"
                    className="link-nav"
                  >
                    <NavDropdown.Item href="#">
                      <Link to="/about">Who we are</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      <Link to="/gallery">What to see</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      <Link to="/travel-with-us">Why travel with us</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Link>

                <Link>
                  <NavDropdown
                    title="Where to go"
                    id="basic-nav-dropdown"
                    className="link-nav"
                  >
                    <NavDropdown.Item href="#">
                      <Link to="/destination/kenya">Kenya</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      <Link to="/destination/tanzania">Tanzania</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      <Link to="/destination/uganda">Uganda</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      <Link Link to="/destination/rwanda">
                        Rwanda
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      <Link Link to="/destination/botswana">
                        Botswana
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      <Link Link to="/destination/namibia">
                        Namibia
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      <Link Link to="/destination/southafrica">
                        South Africa
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Link>
                <Nav.Link href="#" className="link-nav">
                  <Link to="/activities">What to do</Link>
                </Nav.Link>

                <Nav.Link className="link-nav">
                  <Link to="/design-your-own-safari">DIY</Link>
                </Nav.Link>

                <Nav.Link className="link-nav">
                  <Link to="/booking">Book Now</Link>
                </Nav.Link>

                <Nav.Link className="link-nav">
                  <Link to="/contact">Contacts</Link>
                </Nav.Link>
                <Nav.Link className="link-nav">
                  <Link to="/blog">Blog</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        {/* <Link to="/safaris">
          <SearchRounded className="search" />
        </Link> */}

        <div className="right">
          <Link to="/cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingBasket style={{ color: "#eac27a" }} />
            </Badge>
          </Link>
        </div>
      </div>

      <div className="collapsed-menu"></div>
    </div>
  );
};

export default NavBar;
