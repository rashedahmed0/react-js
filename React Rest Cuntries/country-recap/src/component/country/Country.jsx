import { useState } from 'react';
import './country.css'
const Country = ({ country, handleVisitedflag, handleVisitedCountry }) => {
    // console.log(country);
    // useState 
    let [visitedBtn, setVisiteedBtn] = useState(false);

    // visited event handle 
    let handleVisitedBtn = () => {
        setVisiteedBtn(!visitedBtn);
    }

    return (
        <div className='box'>
            <h3>name : {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>population :{country.population}</p>
            <button onClick={() => { handleVisitedCountry(country) }} >CountryName </button>
            <button onClick={() => { handleVisitedflag(country) }}>flags</button> <br />
            <button onClick={handleVisitedBtn}>{(visitedBtn ? 'visited' : 'not going')}</button>
            {visitedBtn ? ' i visit this country' : 'i not going there'}
        </div>
    );
};

export default Country;