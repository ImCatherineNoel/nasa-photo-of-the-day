// File will hold the main body information including: 
// image, date, copyright and explanation information from API 

import React from 'react';
import styled from 'styled-components';


const TEST = styled.div`
border: 5px solid Aquamarine;
`;
const TEST2 = styled.div`
border: 5px solid DarkMagenta;
`;

const TEST3 = styled.img`
  border: 3px solid green;
`;

function Main(props) {
  if (!props.url) return <h3>Loading...</h3>;
  return (   
  <>
  <div>
    <TEST3 src={props.url} alt={props.title}/>      
  </div>     
        <TEST>
        <div>Date: {props.date}</div>  
        <span>Photo Copyright: {props.copyright}</span> 
        </TEST>
        <TEST2>
          <p>{props.explanation}</p>
        </TEST2>
  </>
  );
};
export default Main;