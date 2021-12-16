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
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
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

  return (
    <Navbar className="fixed-top" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={NavLogo}
            height="30"
            className="d-inline-block align-top"
            alt="site logo"
          />
          Purgation
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="myResponsive">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/write">
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
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
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
    // <div className="top">
    //   <div className="topLeft">
    //     <Link to="/">
    //       <img className="navLogo" src={NavLogo} alt="logo" />
    //     </Link>
    //   </div>
    //   <div className="topCenter">
    //     <ul className="topList">
    //       <li className="topListItem">
    //         <Link className="link" to="/">
    //           HOME
    //         </Link>
    //       </li>
    //       <li className="topListItem">
    //         <Link className="link" to="/about">
    //           ABOUT
    //         </Link>
    //       </li>
    //       <li className="topListItem">
    //         <Link className="link" to="/contact">
    //           CONTACT
    //         </Link>
    //       </li>
    //       <li className="topListItem">
    //         <Link className="link" to="/write">
    //           WRITE
    //         </Link>
    //       </li>
    //       <li className="topListItem logoOut" onClick={handleLogout}>
    //         {user && "LOGOUT"}
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="topRight">
    //     {user ? (
    //       <Link to="/settings">
    //         <img
    //           className="topImg"
    //           src={
    //             // {PF+user.profilePic}
    //             ProfileImage
    //           }
    //           alt="profile"
    //         />
    //       </Link>
    //     ) : (
    //       <ul className="topList">
    //         <li className="topListItem">
    //           <Link className="link" to="/login">
    //             LOGIN
    //           </Link>
    //         </li>
    //         <li className="topListItem">
    //           <Link className="link" to="/register">
    //             REGISTER
    //           </Link>
    //         </li>
    //       </ul>
    //     )}
    //     <input
    //       type="text"
    //       placeholder="Search"
    //       className="searchInput"
    //       autoFocus={true}
    //       onKeyPress={handleKeyPress}
    //       onChange={(e) => setSearch(e.target.value)}
    //     />
    //     <i className="topSearchIcon fas fa-search" onClick={handleSearch}></i>
    //   </div>
    // </div>
  );
}
