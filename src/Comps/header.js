import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
  color:white;
  font-size: 2em;
  text-align: center;
  margin: 0px auto;
  // border: 5px solid DarkOrange;
  background-color: black;
`;

function Header(props) {
  return (   
     <Title>
          {props.title}
     </Title>
  );
};
export default Header;