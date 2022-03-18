import React from 'react';

const Header = () => {
    const toggleTheme = () => {
        const moon = document.querySelector('.fa-moon');
        const header = document.querySelector('.header');
        const input = document.querySelector('#search');
        const select = document.querySelector('select');
        const filter = document.querySelector('.filter');
        const country = document.querySelector('.country');
        const grid = document.querySelector('.grid');
        const details = document.querySelectorAll('.details');

        document.body.classList.toggle('light-theme');
        header.classList.toggle('light-theme');
        input.classList.toggle('light-theme');
        select.classList.toggle('light-theme');
        filter.classList.toggle('light-theme');
        country.classList.toggle('light-theme');
        grid.classList.toggle('light-theme');

        details.forEach((detail) => {
            detail.classList.toggle('light-theme');
        });
    };
    

    return (
        <>
            <header className="header">
                <div>
                    <h1>Where in the world?</h1>
                </div>
                <div>
                    <i className="fas fa-moon" onClick={toggleTheme}></i> Dark Mode
                </div>
            </header>
        </>
    );
};

export default Header;
