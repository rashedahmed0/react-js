import { useState } from 'react';
import './country.css'
const Country = ({ country, handleFlag }) => {
    //useState for visited 
    let [visited, setVisited] = useState(false);

    // event handle for visited 
    let handleVisitedBtn = () => {
        setVisited(!visited);
    }
    console.log(country);
    return (
        <div className='box'>
            <h3>country Name : {country.name.common}</h3>
            <img src={country.flags.png} alt="" style={{ width: '250px', height: '150px' }} />
            <p>Population : {country.population}</p>
            <p>Capital :  {country.capital}</p>
            <button onClick={() => { handleFlag(country) }}>flag</button> <br />
            <button onClick={handleVisitedBtn}>{visited ? 'visited' : 'not visited'}</button>
            {
                (visited ? 'i visited ' : 'i am goint ')
            }
        </div>
    );
};

export default Country;