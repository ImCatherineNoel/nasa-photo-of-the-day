//File will hold the footer links including 
//link to hd, link to nasa
import React from 'react';
import styled from 'styled-components';

const TEST = styled.div`
border: 5px solid yellow;
`;

function Footer(props) {
  return (   
  <TEST>
        <a href={props.hdurl}>See Image in HD</a>  |  
        <a href='https://www.nasa.gov/'>Visit the NASA Website </a> 
        Project made with <a href='https://api.nasa.gov/'>NASA APOD API</a> 
  </TEST>
  );
};
export default Footer;