import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: lightblue;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: auto;
      

      a {
       
        text-decoration: none;
        font-weight : 600;
        color: black;

        &:hover {
          color: orange;
        }
      }
    }
  }
`;


const Headers = () => {
  return (
    <StyledHeader>
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Nav>
  </StyledHeader>
  )
}

export default Headers