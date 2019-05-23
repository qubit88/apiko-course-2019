import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  displaye: flex;
  justify-content: center;
  width: 100%;
`;

const NavButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid white;
  border-radius: 3px;
  text-decoration: none;
`;

const activeStyle = {
  fontWeight: "bold",
  background: "transparent",
  color: "white",
  borderWidth: "2px"
};

const Navigation = () => (
  <Navbar>
    <NavButton as={NavLink} activeStyle={activeStyle} exact to="/">
      All
    </NavButton>
    <NavButton as={NavLink} activeStyle={activeStyle} to="/new">
      New
    </NavButton>
    <NavButton as={NavLink} activeStyle={activeStyle} to="/completed">
      completed
    </NavButton>
  </Navbar>
);

export default Navigation;
