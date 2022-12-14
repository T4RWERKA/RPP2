import React, { Component } from "react";
import ReactDOM from 'react-dom';
import About from "../Pages/About";
import Home from "../Pages/Home";
import Authors from "../Pages/Authors";

import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/use-localstorage';  

import {
  Button,
  Container,
  Dropdown,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";

// import Dropdown from "./Dropdown";

import logo from "../assets/BookLogo.webp";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const [language, setLanguaege] = useLocalStorage('language', 'ru')
  
  // const handleLanguageChange = () => {
  //   if (language === 'en') {
  //     i18n.changeLanguage('ru');
  //     setLanguaege('ru');
  //   } else if (language === 'ru') {
  //     i18n.changeLanguage('en');
  //     setLanguaege('en');
  //   }
  // }

  const setRussian = () => {
    i18n.changeLanguage('ru');
    setLanguaege('ru');
  }

  const setEnglish = () => {
    i18n.changeLanguage('en');
    setLanguaege('en');
  }

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
              <Nav.Link href="/"> {t('Home')} </Nav.Link>
              <Nav.Link href="/authors"> {t('Authors')} </Nav.Link>
              <Nav.Link href="/#about-us">{t('About us')}</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder={t('Search')}
                className="me-sm-2"
              />
            </Form>
            <Button variant="outline-info" >{t('Search')}</Button>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {language === 'ru' ? 'RU' : 'EN'}
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" onClick={setEnglish} href="#">EN</a>
                <a class="dropdown-item" onClick={setRussian} href="#">RU</a>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/authors" component={Authors} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default Header;
