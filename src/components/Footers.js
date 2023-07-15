import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Footers = () => {

    return <StyledFooter>&copy; {new Date().getFullYear()} Todo Shopping App</StyledFooter>;

}

export default Footers