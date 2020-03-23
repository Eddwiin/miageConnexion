import React from "react";
import Proptypes from "prop-types";
import "./modal.scss";

const Modal = ({ title, children, size, closeModal = () => {} }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content__header">
          <span className="modal__content__header__title">{title}</span>
          <span onClick={closeModal} className="modal__content__header__close">
            &times;
          </span>
        </div>
        <div className="modal__content__body">{children}</div>
        <div className="modal__footer">
          <button className="odal__footer__btn-add">Envoyer</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: Proptypes.string,
  size: Proptypes.string,
  closeModal: Proptypes.func
};

export { Modal };
