import { useState } from 'react';
import './country.css'
const Country = ({ country, handleViditedCountry }) => {
    // console.log(handleViditedCountry);
    let { name, flags, capital } = country;

    let [visited, setVisited] = useState(false);
    let handleVisited = () => {
        setVisited(!visited);
    }

    // console.log(country);
    return (
        <div >
            <div style={{ color: visited ? 'black' : 'white' }} className={`country ${visited && 'visited'}`}>
                <p>name: {name.common}</p>
                <img src={flags.png} alt="" className='img' />
                <p>capital : {capital}</p>
                <button onClick={() => { handleViditedCountry(country) }}> Mark visited</button>
                <button onClick={handleVisited}>{visited ? 'visited' : 'going'} </button>
                {
                    visited ? 'i visited this country' : 'i not go there '
                }
            </div>

        </div>
    );
};

export default Country;