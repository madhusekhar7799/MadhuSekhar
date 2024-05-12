import React from 'react';
import  './Style.css'
import { FiAperture } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { RxDropdownMenu } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logos'>
      {/* <FaBars  className='spl'/> */}
      <FiAperture className='logo' />
      <h4>LOGO</h4>
      <div className='icons'>
      <CiSearch className='icon'/>
      <CiHeart className='icon'/>
      <IoLockClosedOutline className='icon'/>
      <IoPersonOutline className='icon1'/>
      <RxDropdownMenu className='icon2'/>
      </div>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    
    </nav>
    
  );
};

export default Navbar;
