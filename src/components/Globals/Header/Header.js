import React, { Component } from "react"
import * as ReactBootStrap from "react-bootstrap"
import plant from "./plant.svg"

class Header extends Component {
  render() {
    return (
      <ReactBootStrap.Navbar bg="light" expand="lg">
        <ReactBootStrap.Navbar.Brand href="/">
          <img
            src={plant}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Brand href="/">
          Urban Roots
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>

            <ReactBootStrap.Nav.Link href="/shop">Shop</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/about">
              About Us
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="/login">
              Login
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/register">
              Sign Up
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    )
  }
}

export default Header
