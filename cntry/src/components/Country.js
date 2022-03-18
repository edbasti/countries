import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Loader from './Loader';

const Country = () => {
    const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { name } = useParams();
    const navigate = useNavigate();
    
    const handleClickBorder = async (e) => { 
        setIsLoading(true);
        const url = 'https://restcountries.com/v3.1/all';
        const resp = await fetch(url);
        const countries = await resp.json();
        const borderCountry = countries.filter((item) => item.cca3 === e.target.outerText);
        navigate(`/countries/${borderCountry[0].name.common}`);
        setIsLoading(false);
    }    

    useEffect(() => {
        const fetchCountry = async () => {
            setIsLoading(true);
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            const country = await response.json();
            console.log(country);
            setCountry(country);
            setIsLoading(false);
        };
        fetchCountry();
    }, [name]);
    return (
        <>
            <section className="country">
            <Link to="/" className="btn btn-light">
                <i className="fas fa-arrow-left"></i>Back
            </Link>
            
            {
                isLoading && <Loader />
            }

                {country && country.map((cntry) => {
                    const { ccn3, flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = cntry;
                    const strCurrencies = [];
                    const strNativeNames = [];
                    const strLanguages = [];
                    

                    for (const [key] of Object.entries(currencies)) {
                        strCurrencies.push(currencies[key].name);
                    }

                    for (const [key] of Object.entries(name.nativeName)) {
                        strNativeNames.push(name.nativeName[key].common);
                    }

                    for (const [key] of Object.entries(languages)) {
                        strLanguages.push(languages[key]);
                    }

                    return (
                        <article key={ccn3}>
                            <div className="flag">
                                <img src={flags.png} alt={name.common} />
                            </div>
                            <div className="country-details">
                                <h2>{name.common}</h2>
                                <h5>
                                    Native Name: <span>{strNativeNames[0]}</span>
                                </h5>
                                <h5>
                                    Population: <span>{population}</span>
                                </h5>
                                <h5>
                                    Region: <span>{region}</span>
                                </h5>
                                <h5>
                                    Sub Region: <span>{subregion}</span>
                                </h5>
                                <h5>
                                    Capital: <span>{capital}</span>
                                </h5>
                                <h5>
                                    Top Level Domain: <span>{tld}</span>
                                </h5>
                                <h5>
                                    Currencies: {
                                        strCurrencies.map((curr) => (
                                            <span>{curr}</span>
                                        ))
                                    }
                                    
                                </h5>
                                <h5>
                                    Languages: {
                                        strLanguages.map((lang) => (
                                            <span>{lang}{' ' }</span>
                                        ))
                                    }
                                </h5>
                            </div>
                            {borders && 
                                <div>
                                    <h4>Border Countries:</h4>
                                    <div className="borders">
                                        {borders.map((border => {
                                            return (
                                                <ul key={border}>
                                                    <li onClick={handleClickBorder} key={border}>{border}</li>
                                                </ul>
                                            )
                                        }))}
                                    </div>
                                </div>
                            }
                        </article>
                    );
                })}

            </section>
        </>
    );
};

export default Country;
