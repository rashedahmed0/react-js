import { useEffect, useState } from "react";
import Country from "../country/Country";
import './countries.css'

const Countries = () => {
    // useState 
    let [countries, setCountries] = useState([])
    let [countryName, setCountryName] = useState([])
    let [countryFlag, setCountryFlag] = useState([])

    // useEffect 
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    // console.log(countries);


    // event handle 
    let handleCountryName = (countries) => {
        let newArray = [...countryName, countries];
        setCountryName(newArray);

    }
    let handleCountryFlag = (countries) => {
        let newArray = [...countryFlag, countries];
        setCountryFlag(newArray);

    }
    return (
        <div>
            <h3>country : {countries.length}</h3>
            {
                countryName.map(name => <li>{name.name.common}</li>)
            }
            {
                countryFlag.map(flag => <img className="img" src={flag.flags.png}></img>)
            }
            <div className="country-container">

                {
                    countries.map(countries => <Country
                        key={countries.name.common}
                        countries={countries}
                        handleCountryName={handleCountryName}
                        handleCountryFlag={handleCountryFlag}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;