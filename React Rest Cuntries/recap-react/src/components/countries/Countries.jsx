import { useEffect } from "react";
import { useState } from "react";
import Country from "../../Country/Country";
import './Counties.css'


const Countries = () => {
    // useState for country 
    let [countries, setCountries] = useState([]);
    // useState for flag 
    let [flag, setFlag] = useState([]);

    // event handle 
    let handleFlag = (country) => {
        let newArray = [...flag, country];
        setFlag(newArray);

    }

    // useEffect 
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    console.log(countries);
    return (
        <div>
            <h3>coutnries : {countries.length} </h3>
            {
                flag.map(flag => <img src={flag.flags.png} style={{ width: '150px ', height: '100px', margin: '10px' }}></img>)
            }
            <div className="country-container">

                {
                    countries.map(country => <Country
                        country={country}
                        handleFlag={handleFlag}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;