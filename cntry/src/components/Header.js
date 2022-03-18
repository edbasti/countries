import React, { useState, useEffect } from 'react';

const Header = () => {
    const toggleTheme = () => {
        console.log('toggl');
        const moon = document.querySelector('.fa-moon');
        const header = document.querySelector('.header');
        const input = document.querySelector('#search');
        const select = document.querySelector('select');
        const filter = document.querySelector('.filter');
        const details = document.querySelectorAll('.details');

        moon.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            header.classList.toggle('light-theme');
            input.classList.toggle('light-theme');
            select.classList.toggle('light-theme');
            filter.classList.toggle('light-theme');

            details.forEach((detail) => {
                detail.classList.toggle('light-theme');
            });
        });
    };
    

    return (
        <>
            <header className="header">
                <div>
                    <h1>Where in the world?</h1>
                </div>
                <div>
                    <i className="fas fa-moon" onClick={() => { toggleTheme() }}></i>
                </div>
            </header>
        </>
    );
};

export default Header;
