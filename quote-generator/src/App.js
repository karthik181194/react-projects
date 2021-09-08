import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [quote, setQuote] = useState('');
    const [load, setLoad] = useState(false);
    useEffect(() => {
        getData();
    },[]);
    function getData(){
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
             const {advice} = response.data.slip;
            setQuote(advice);
    setLoad(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }
const generateQuote = () =>{
    setLoad(true);
    getData();
}    
    return (
        <div className="wrapper">
            <div className="card">
                <div>
                <i className="fas fa-quote-left"></i>
                </div>
            <h1>{quote}</h1>
            </div>
            {/* <button class="button button--moema button--inverted button--text-thick button--size-s" onClick={generateQuote}>Generate New Quote</button> */}
            <button  className="button button-mat btn--7" disabled={load?"true":""} onClick={generateQuote}>
        <div className="psuedo-text">New Quote</div>
      </button>
        </div>
    );
}

export default App;