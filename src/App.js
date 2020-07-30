import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from './Comps/header.js';
import Main from './Comps/main.js';
import Footer from './Comps/footer.js'
import styled from 'styled-components';

const Wrapper = styled.div`
    // border: 5px solid red;
    max-width: 800px;
    margin: 0px auto;
    background-color:AntiqueWhite; 
    padding: 0;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;   
`;


function App() {

    const [data, setData] = useState('');

    useEffect( () =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=JcscI1lYExVXYgatImbIRf0G728iv6lXTqNeEqge&date=2018-12-18')
    .then(response => {
        
        setData(response.data);
        console.log(data);
    })
    .catch(error => console.log('Error!', error));
    }, []); 
    

return (
	<Wrapper> 
        < Header title={data.title}/>
        < Main url={data.url} title={data.title} date={data.date} copyright={data.copyright} explanation={data.explanation}/>           
        < Footer hdurl={data.hdurl} />   
    </Wrapper>
    
  );

};
export default App;
