import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";

import "./TopNav.css";
import ProfileImage from "../../images/profile.jpg";
import NavLogo from "../../images/logo.png";
import { Context } from "../../shared/context/Context";

export default function TopNav() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setExpanded(false);
  };

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     handleSearch();
  //     console.log("pressed");
  //   }
  // };
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
          Purgation
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="myResponsive">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={handleCollapse}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleCollapse}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleCollapse}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/write" onClick={handleCollapse}>
              Write
            </Nav.Link>
            {user && (
              <Nav.Link as={Link} to="/write" onClick={handleLogout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {user ? (
              <Link to="/settings">
                <img
                  className="topImg"
                  src={
                    // {PF+user.profilePic}
                    ProfileImage
                  }
                  alt="profile"
                />
              </Link>
            ) : (
              <React.Fragment>
                <Nav.Link as={Link} to="/login" onClick={handleCollapse}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" onClick={handleCollapse}>
                  Register
                </Nav.Link>
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
