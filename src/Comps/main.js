// File will hold the main body information including: 
// image, date, copyright and explanation information from API 

import React from 'react';
import styled from 'styled-components';


const INFOTEXT = styled.div`
// border: 5px solid Aquamarine;
display:flex;
flex-direction: column;
padding: 1rem;
`;
const MIDWRAP = styled.div`
// border: 0px solid Purple;
display:flex;
flex-direction: row;
`;
const FONT = styled.p`
font-size: 0.8rem;
`;
const DATE = styled.p`
padding-top: .25rem;
font-size: 0.5rem;
`;
const COPY = styled.p`
font-size: 0.4rem;
`;
const IMG = styled.img`
// border: 3px solid green;
  width: 300px;
  padding: 1rem;
`;

function Main(props) {
  if (!props.url) return <h3>Loading...</h3>;
  return (   
  <MIDWRAP>
  <div>
    <IMG src={props.url} alt={props.title}/>      
  </div>     
        <INFOTEXT>
        <DATE>Date: {props.date}</DATE>  
        <COPY>Photo Copyright: {props.copyright}</COPY> 
          <FONT>{props.explanation}</FONT>
        </INFOTEXT>
  </MIDWRAP>
  );
};
export default Main;