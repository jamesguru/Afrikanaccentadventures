import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, Person } from "@material-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from "../../redux/user";
import { Redirect,Link, useHistory } from "react-router-dom";

export default function Topbar() {


  const user = useSelector(state => state.user);

  const dispatch = useDispatch();


  const history = useHistory();

  const handleLogout = () =>{

    dispatch(logOut());




    history.push("/");

    
  }



  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ADMIN DASHBOARD</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          
          
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />


          <div className="topbarIconContainer" onClick={handleLogout} >
            <Person />

            <span>Logout</span>
          </div>


        </div>
      </div>


      {!user.currentUser && <Redirect to="/" />}
    </div>
  );
}
