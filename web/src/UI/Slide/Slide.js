import React from 'react';
import Proptypes from 'prop-types';
import style from './Slide.module.scss';

const Slide = ({ src, title, description }) => (
    <div className={style.slide}>
        <img src={src} alt="another" />
        <div className={style.slide__overlay}>
            <h4 className={style.slide__overlay__title}>{title}</h4>
            <div className={style.slide__overlay__text}>{description}</div>
        </div>
    </div>
)

Slide.propTypes = {
    src: Proptypes.string,
    title: Proptypes.string,
    description: Proptypes.string
}

export { Slide }