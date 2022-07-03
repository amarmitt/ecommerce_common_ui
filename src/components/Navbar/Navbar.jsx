import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
//import * from 'Navbar.scss'
import "./Navbar.css";
// const Container = styled.div`
// height:60px;
// background-color:black
// `

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <span className="language"> EN </span>

          <div className="searchContainer">
            <input style={{ border: "none" }}></input>
            <Search style={{color:'gray', fontSize:16}}/>
          </div>
        </div>
        <div className="center">
          <h1>Veggie.</h1>
        </div>
        <div className="right">
          <div className="menuItem">
           <NavLink to="/register">Register</NavLink> 
          </div>
          <div className="menuItem">
            SignIn
          </div>
          <div className="menuItem">
            <Badge overlap="rectangular" badgeContent={0} color="primary">
                <ShoppingCartOutlined/>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
