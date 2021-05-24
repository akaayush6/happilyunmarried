import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';


function Header(){
return (
    <div className="header justify-content-between d-flex">
      <div className='d-flex'>
      <div className="leftmenu">
          <MenuIcon/>   
      </div>
      <div className="logo">
          <img src='./ustraa_1.png'/>
      </div>
      </div>
      <div className='d-flex'>
      <div className="search">
          <SearchIcon/>
      </div>
      <div className="cart">
          <ShoppingCartIcon/>
      </div>
      <div className="user">
          <AccountCircleIcon/>
      </div>
      </div>

    </div>
);
}

export default Header;
