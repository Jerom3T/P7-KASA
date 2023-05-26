import React from 'react';
import homeCover from '../images/home_cover.png';

const Banner = () => {
    return (
        <div className="banner">
            <img src={homeCover} alt="home_cover" />
            <span className="text">Chez vous, partout et ailleurs</span>
        </div>
    );
};

export default Banner;
