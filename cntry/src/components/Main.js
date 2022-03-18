import React, { useState, useEffect } from 'react';
import Countries from './Countries'
import Loader from './Loader';


const url = 'https://restcountries.com/v3.1/all';

const Main = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [q, setQ] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(countries);    
    
    const fetchCountries = async () => {
        setIsLoading(true)
        const resp = await fetch(url);
        const countries = await resp.json();
        console.log(countries);
        setCountries(countries);
        setIsLoading(false)
    }    
    useEffect(() => {
        fetchCountries();
    }, []);
    
    const filterCountries = (val) => {
        
        setQ(val);

        const newData = countries.filter((item) => {
            return item.name.common.toLowerCase().indexOf(val.toLowerCase()) > -1
        });

        if (newData) {
            setFilteredCountries(newData);
        }
    
    }
    
    const filterByRegion = (val) => {

        if (val !== 'All') {
            const newData = countries.filter((item) => {
                return item.region.toLowerCase().indexOf(val.toLowerCase()) > -1
            });
            
            if (newData) {
                setFilteredCountries(newData);
            }
        }
    }

    return (
        <>
            <section className="filter">
                <form className="form-control">
                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Search for a country"
                        value={q}
                        onChange={(e) => filterCountries(e.target.value)}
                    />
                </form>
                <div className="region-filter">
                    <select
                        name="select"
                        id="select"
                        className="select"
                        onChange={(e) => {
                        filterByRegion(e.target.value);
                    }}>
                        <option value="All">Filter by region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </section>
            <section className="grid">
            {
                isLoading && <Loader />
            }
                            
                <Countries
                    data={filteredCountries.length ? filteredCountries : countries}
                />
            </section>
        </>
    );
};

export default Main;
