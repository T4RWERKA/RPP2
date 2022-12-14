import React, { Component } from "react";
import ReactDOM from 'react-dom';
import About from "../Pages/About";
import Home from "../Pages/Home";
import Authors from "../Pages/Authors";
import Metliskij from "../Pages/Auth/Metliskij";
import Hilevich from "../Pages/Auth/Hilevich";
import Brovka from "../Pages/Auth/Brovka";
import Borodulin from "../Pages/Auth/Borodulin";
import Adam from "../Pages/Auth/Adam";

import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";

import logo from "../assets/BookLogo.webp";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="45"
                width="45"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/authors"> Authors </Nav.Link>
                <Nav.Link href="/about"> About us </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="me-sm-2"
                />
              </Form>
              <Button variant="outline-info">Search</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/authors" component={Authors} />
            <Route exact path="/about" component={About} />
            <Route exact path="/authors/hilevich" component={Hilevich} />
            <Route exact path="/authors/metliskij" component={Metliskij} />
            <Route exact path="/authors/brovka" component={Brovka} />
            <Route exact path="/authors/borodulin" component={Borodulin} />
            <Route exact path="/authors/globus" component={Adam} />
          </Switch>
        </Router>

      </>
    );
  }
}

export default Header;
