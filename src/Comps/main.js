// File will hold the main body information including: 
// image, date, copyright and explanation information from API 

import React from 'react';

function Main(props) {
  if (!props.url) return <h3>Loading...</h3>;
  return (   
  <>
  <div>
  
  <img src={props.url} alt={props.title}/>      
  </div>     
        <div>
        <span>Date: {props.date}</span>  
        <span>Photo Copyright: {props.copyright}</span> 
        </div>
        <div><p>{props.explanation}</p>   </div>
  </>
  );
};
export default Main;