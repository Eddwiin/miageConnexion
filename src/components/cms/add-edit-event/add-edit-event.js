import React from "react";
import Proptypes from 'prop-types';
import { Input, Textarea } from "./../../shared";
import ImageUploader from "react-images-upload";
import "./add-edit-event.scss";

const AddEditEvent = ({ type }) => {
  return (
    <div className="add-edit-event">
      <div className="add-edit-event__field">
        <Input placeholder="Titre" style={{ width: "50%" }} />
      </div>

      <div className="add-edit-event__field">
        <Input placeholder="Lien" style={{ width: "50%" }} />
      </div>
      <div className="add-edit-event__field">
        <Textarea
          placeholder="Description"
          rows="7"
          cols="100"
          style={{ width: "50%" }}
        />
      </div>

      <div>
        <ImageUploader
          buttonText="Choisir image"
          withIcon={true}
          imgExtension={[".jpg", ".gif", ".png", ".jpeg", ".gif"]}
        />
      </div>
    </div>
  );
};


AddEditEvent.propTypes = {
  type: Proptypes.string.isRequired 
};

export default AddEditEvent;
