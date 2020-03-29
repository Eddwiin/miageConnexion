import React from 'react';
import Proptypes from 'prop-types';
import './slide.scss';

const Slide = ({ img, title, text}) => {

    return (
        <div className="slide">
            <img src={img} alt="another" />

            <div class="slide__overlay">
                <h4 className="slide__overlay__title">{title}</h4>
                <div className="slide__overlay__text">{text}</div>
            </div>
           
        </div>
    )
}

Slide.propTypes = {
    img: Proptypes.string,
    title: Proptypes.string,
    text: Proptypes.string
}

export { Slide };