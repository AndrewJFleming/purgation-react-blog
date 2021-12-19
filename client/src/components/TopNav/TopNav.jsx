import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";

import "./TopNav.css";
import NavLogo from "../../images/logo.png";
import { Context } from "../../shared/context/Context";
import NavLink from "./NavLink/NavLink";

export default function TopNav() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setExpanded(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      window.location.replace("/?search=" + search);
    }
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      className="fixed-top"
      expanded={expanded}
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleCollapse}>
          <img
            src={NavLogo}
            height="30"
            className="d-inline-block align-top"
            alt="site logo"
          />
          <span className="serifTitle">PURGATION</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="myResponsive">
          <Nav className="me-auto">
            <NavLink name="About" path="/about" handler={handleCollapse} />
            <NavLink name="Contact" path="/contact" handler={handleCollapse} />
            <NavLink name="Write" path="/write" handler={handleCollapse} />
            {user && (
              <NavLink name="Logout" path="/write" handler={handleLogout} />
            )}
          </Nav>
          <Nav>
            {user ? (
              <Link to="/settings" className="avatar" alt={user.username}>
                <span className="avatarChar">{user.username.charAt(0)}</span>
              </Link>
            ) : (
              <React.Fragment>
                <NavLink name="Login" path="/login" handler={handleCollapse} />
                <NavLink
                  name="Register"
                  path="/register"
                  handler={handleCollapse}
                />
              </React.Fragment>
            )}
          </Nav>
          <Nav>
            <Form className="d-flex navSearch" onSubmit={handleSearch}>
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-light" type="submit" className="ml-1">
                Search
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
