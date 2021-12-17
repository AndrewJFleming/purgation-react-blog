import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NavLink = ({ path, handler, name }) => {
  return (
    <Nav.Link as={Link} to={path} onClick={handler}>
      {name}
    </Nav.Link>
  );
};

export default NavLink;
