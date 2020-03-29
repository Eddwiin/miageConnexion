import React from 'react';
import Proptypes from 'prop-types';
import './not-found.scss';

const NotFound = ({ message }) => {

    return(
        <div className="not-found"> 
            <div className="not-found__oops">Oops!</div>
            <div className="not-found__message">{message}</div>
        </div>
    )
}

NotFound.propTypes = {
    message: Proptypes.string.isRequired
}

export { NotFound }