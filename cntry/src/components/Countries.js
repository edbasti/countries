import React from 'react';
import { Link } from 'react-router-dom';

const Countries = ({ data }) => {
    return (
        <>
            {
                data && data.map((country) => {
                    const { numericCode, name, population, region, capital, flags } = country;
                    const finalCapital = capital ? capital[0] : '';
                    
                    return (<Link to={`/countries/${name.common}`} className="country-link">
                        <article key={numericCode} className="countries">
                            <div className="flag">
                                <img src={flags.png} alt={name} />
                            </div>
                            <h3>{name.common}</h3>
                            <div className="details">
                                <h4>
                                    Name: <span>{name.common}</span>
                                </h4>
                                <h4>
                                    Population: <span>{population}</span>
                                </h4>
                                <h4>
                                    Region: <span>{region}</span>
                                </h4>
                                <h4>
                                    Capital: <span>{finalCapital}</span>
                                </h4>
                            </div>
                        </article>
                    </Link>)
                })     
            }
        </>
    );
}

export default Countries;
