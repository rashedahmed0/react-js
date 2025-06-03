import { useState } from 'react';
import './country.css'
const Country = ({ countries, handleCountryName, handleCountryFlag }) => {
    // useState 
    let [visited, setVisited] = useState(false)

    // event handler 
    let handleVisited = () => {
        setVisited(!visited)
    }
    console.log(countries);
    return (
        <div className='box'>
            <h4>name :{countries.name.common}</h4>
            <img className='img' src={countries.flags.png} alt="" />
            <p>Population : {countries.population}</p>
            <button onClick={handleVisited}>visited</button>
            {
                (visited ? 'visited this country ' : 'not visited ')
            }
            <br />
            <button onClick={() => { handleCountryName(countries) }}>country name </button>
            <br />
            <button onClick={() => { handleCountryFlag(countries) }}>Country Flags</button>
        </div>
    );
};

export default Country;