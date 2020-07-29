import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from './Comps/header.js';
import Main from './Comps/main.js';
import Footer from './Comps/footer.js'


function App() {

    const [data, setData] = useState('');

    useEffect( () =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=JcscI1lYExVXYgatImbIRf0G728iv6lXTqNeEqge&date=2005-12-18')
    .then(response => {
        
        setData(response.data);
        console.log(data);
    })
    .catch(error => console.log('Error!', error));
    }, []); 
    

return (
	<div className='App'> 
        < Header title={data.title}/>
        < Main url={data.url} title={data.title} date={data.date} copyright={data.copyright} explanation={data.explanation}/>           
        < Footer hdurl={data.hdurl} />   

    </div>
    
  );

};
export default App;
