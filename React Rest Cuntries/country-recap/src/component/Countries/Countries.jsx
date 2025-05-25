import { useEffect, useState } from "react";
import Country from "../country/Country";
import './countries.css'

const Countries = () => {
    // useState 
    let [countries, setCountries] = useState([]);
    // useState for flag
    let [flags, setflag] = useState([]);
    // useState for country 
    let [countryNames, setCountryName] = useState([])
    // useEffect 
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    // event handle for flag
    let handleVisitedflag = (country) => {
        let newArray = [...flags, country];
        setflag(newArray);

    }
    // event handle for country
    let handleVisitedCountry = (country) => {
        let newArray = [...countryNames, country];
        setCountryName(newArray);

    }



    return (
        <div>
            <h3>countries: {countries.length}</h3>
            <ul>
                <h2>country name :</h2>
                {
                    countryNames.map(countryName => <li key={countryName.name.common}> {countryName.name.common}</li>)
                }
            </ul>
            <ul>
                {
                    flags.map((flag, idx) => <img key={idx} src={flag.flags.png} style={{ width: '150px', height: '100px' }}></img>)
                }
            </ul>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.name.common}
                        country={country}
                        handleVisitedflag={handleVisitedflag}
                        handleVisitedCountry={handleVisitedCountry}
                    ></Country>)
                }

            </div>

        </div>
    );
};

export default Countries;