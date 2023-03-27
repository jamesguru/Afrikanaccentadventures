import "./sidebar.css";
import {
  Announcement,
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  Category,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  FeaturedVideo,
  VideoLabel,
  PhotoAlbum,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>

            <Link to="/categories" className="link">
              <li className="sidebarListItem">
                <Category className="sidebarIcon" />
                categories
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Newsletter
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Packages
              </li>
            </Link>

            <Link to="/orders" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                orders
              </li>
            </Link>
            <Link to="/activities" className="link">
              <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
                Activities
              </li>
            </Link>
           
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link to="/promo" className="link">
              <li className="sidebarListItem">
                <FeaturedVideo className="sidebarIcon" />
                Promotion
              </li>
            </Link>
            <Link to="/blogs" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Blogs
              </li>
            </Link>

            <Link to="/gallery" className="link">
              <li className="sidebarListItem">
                <VideoLabel className="sidebarIcon" />
                Gallery
              </li>
            </Link>

            <Link to="/slider" className="link">
              <li className="sidebarListItem">
                <PhotoAlbum className="sidebarIcon" />
                Sliders
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
