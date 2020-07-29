import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
  border: 5px solid DarkOrange;
`;

function Header(props) {
  return (   
     <Title>
          {props.title}
     </Title>
  );
};
export default Header;