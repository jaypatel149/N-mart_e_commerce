import React from "react";
import '../index.css';

import { NavLink } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";





const Navbar = () => {

  const getdata = useSelector((state)=> state.reducer.carts)
  console.log(getdata,"getdata..........")





  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid mx-5">
        <NavLink className="navbar-brand fw-bold" to="/">
            <span className="nmart-text mb-0 h1">NMart</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active fw-bold" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink
              to="/login"
              className="btn btn-outline">
                <LoginIcon className="me-2"/>
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="btn btn-outline ms-2"
            >
                <PersonAddAltIcon className="me-2"/>
              Register
            </NavLink>
            <NavLink to="/cart" className="text-success ms-5">
            <Badge badgeContent={getdata.length} color="secondary">
                <ShoppingCartIcon className="me-1" fontSize="large"/>
            </Badge>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
