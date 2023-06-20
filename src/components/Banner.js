import React from 'react';
import homeCover from '../images/home_cover.png';

const Banner = () => {
    const text = "Chez vous, partout et ailleurs";
    const textWithLineBreaks = text.replace(/,/g, ',\n');

    return (
        <div className="banner">
            <img src={homeCover} alt="home_cover" />
            <span className="text">{textWithLineBreaks}</span>
        </div>
    );
};

export default Banner;
