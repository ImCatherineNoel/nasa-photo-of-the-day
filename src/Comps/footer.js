//File will hold the footer links including 
//link to hd, link to nasa


import React from 'react';

function Footer(props) {
  return (   
  <div>
        <a href={props.hdurl}>See Image in HD</a>  |  
        <a href='https://www.nasa.gov/'>Visit the NASA Website </a> 
        Project made with <a href='https://api.nasa.gov/'>NASA APOD API</a> 
  </div>
  );
};
export default Footer;