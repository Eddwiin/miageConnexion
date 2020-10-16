import React from 'react';
import PropTypes from 'prop-types';
import style from './Not-found.module.scss';

const NotFound = ({ message }) => (
    <div className={style.notFound}>
       { message }
    </div>
)

NotFound.propTypes = {
    message: PropTypes.string.isRequired
}

export { NotFound };