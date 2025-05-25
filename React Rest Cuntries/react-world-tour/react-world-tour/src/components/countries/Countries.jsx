import { useEffect, useState } from "react";
import Country from "../country/Country";
import './countries.css'
// main function
const Countries = () => {
    // useState 1
    let [countries, setCountries] = useState([]);
    // useState 2 
    let [visitedCountries, setVisitedCountries] = useState([]);
    // usestate 3
    let [visitedFlag, setVisitedFlag] = useState([]);

    // event handle for country name 
    let handleViditedCountry = (country) => {
        let newArray = [...visitedCountries, country];
        setVisitedCountries(newArray)
        console.log(visitedCountries);

    }
    // event handler for country flag 
    let handleVisitedFlag = country => {
        console.log('add this to visited country ');
        let newArray = [...visitedFlag, country]
        setVisitedFlag(newArray);


    }
    //useEffect for data fetching
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <h4>Visited : country {visitedCountries.length}</h4>
            <h4>Visited : countryflag {visitedFlag.length}</h4>
            <ul>
                {
                    visitedFlag.map((flag, idx) => <img style={{ width: '150px', height: '100px' }} src={flag.flags.png} key={idx}></img>)
                }
            </ul>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.name.common}>{country.name.common}</li>)
                }
            </ul>
            <div className="country-container">

                {
                    countries.map(c => <Country
                        key={c.name.common}
                        country={c}
                        handleViditedCountry={handleViditedCountry}
                        handleVisitedFlag={handleVisitedFlag}></Country>)
                }

            </div>

        </div>
    );
};

export default Countries;