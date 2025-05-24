import { useEffect, useState } from "react";
import Country from "../country/Country";
import './countries.css'
// main function
const Countries = () => {
    // useState 1
    let [countries, setCountries] = useState([]);
    let [visitedCountries, setVisitedCountries] = useState([]);

    let handleViditedCountry = (country) => {
        console.log('add this to visited country ');
        let newArray = [...visitedCountries, country];
        setVisitedCountries(newArray)
        console.log(visitedCountries);

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
            <ul>
                {
                    visitedCountries.map(country => <li key={country.name.common}>{country.name.common}</li>)
                }
            </ul>
            <div className="country-container">

                {
                    countries.map(c => <Country key={c.name.common} country={c} handleViditedCountry={handleViditedCountry}></Country>)
                }

            </div>

        </div>
    );
};

export default Countries;