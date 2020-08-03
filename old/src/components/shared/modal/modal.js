import React from "react";
import Proptypes from "prop-types";
import "./modal.scss";

const Modal = ({ title, content, footer, closeModal = () => {} }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content__header">
          <span className="modal__content__header__title">{title}</span>
          <span onClick={closeModal} className="modal__content__header__close">
            &times;
          </span>
        </div>
        <div className="modal__content__body">{content}</div>
        <div className="modal__content__footer">{footer}</div>
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
