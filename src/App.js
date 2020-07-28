import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


//ToDo: figure out how to do this:
// if (!props.photoOfTheDay) return <h3>Loading...</h3>;

function App() {

    const [data, setData] = useState('');
    useEffect( () =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=JcscI1lYExVXYgatImbIRf0G728iv6lXTqNeEqge&date=2019-12-18')
    .then(response => {
        setData(response.data);
        console.log(data);
    })
    .catch(error => console.log('Error!', error));
    }, []); 


return (
	<div className='App'> 
		{/* Header */}
        <h1>{data.title}</h1>          {/*ToDo: Move to header component & style */}
        {/* Main Body */}
        <img src={data.url} alt='{data.title}'/>           {/*ToDo: Move to main component & style, maybe change date display format  */}
        <div>
        <span>Date: {data.date}</span>  {/*ToDo: Move to main component & style  */}
        <span>Photo Copyright: {data.copyright}</span> {/*ToDo: Move to header component & style */}
        </div>
        <p>{data.explanation}</p>       {/*ToDo: Move to main component & style */}
        {/* Footer */}
        <a href={data.hdurl}>See Image in HD</a>  |  {/*ToDo: Move to footer component & style */}
        <a href='https://www.nasa.gov/'>Visit the NASA Website </a> {/*ToDo: Move to footer component & style */}
        Project made with <a href='https://api.nasa.gov/'>NASA APOD API</a> {/*ToDo: Move to footer component & style */}
        {/* ToDo: Make these links buttons? */}
    </div>
    
  );

};
export default App;
