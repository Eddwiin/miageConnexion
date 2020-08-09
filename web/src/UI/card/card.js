import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import style from './card.module.scss';

const Card = ({
    src,
    alt = "",
    title,
    description,
    created_at
}) => {
    return (
        <div className={style.card}>
            <div className={style.card__img}>
                <img src={src} alt={alt}/>
                <figcaption className={style.card__img__caption}>{title}</figcaption>
            </div>
            <section className={style.card__content}>
                <div className={style.card__content__description}>{description}</div>
                <Moment className={style.card__content__created_at} format="DD/MM/YYYY, HH:mm">
                    {created_at}
                </Moment>
            </section>
        </div>
    )
}

Card.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    created_at: PropTypes.string,
    title: PropTypes.string
}

export { Card } ;