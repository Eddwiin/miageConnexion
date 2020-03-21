import React from 'react'
import Proptypes from 'prop-types';
import './modal.scss';

const Modal = ({ title, children, history, routeRedirect }) => {

    const closeModal = () => {
        history.push(routeRedirect)
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__content__header">
                    <span className="modal__content__header__title">{title}</span>
                    <span onClick={closeModal} className="modal__content__header__close">&times;</span>
                </div>
                <div className="modal__content__body">
                    {children}
                </div>   
            </div>
        </div>
    )
}

Modal.propTypes = {
    title: Proptypes.string.isRequired
}

export { Modal };