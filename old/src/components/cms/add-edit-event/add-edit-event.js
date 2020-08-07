import React from "react";
import Proptypes from 'prop-types';
import { Input, Textarea } from "./../../shared";
import ImageUploader from "react-images-upload";
import "./add-edit-event.scss";

const AddEditEvent = ({ cardToEdit  }) => {
  console.log({cardToEdit});
  return (
    <div className="add-edit-event">
      <div className="add-edit-event__field">
        <Input placeholder="Titre" style={{ width: "50%" }} value={cardToEdit?.name} />
      </div>
      
      <div className="add-edit-event__field">
        <Textarea
          placeholder="Description"
          rows="10"
          cols="100"
          style={{ width: "50%" }}
          value={cardToEdit?.content.content}
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
  cardToEdit: Proptypes.object 
};

export default AddEditEvent;
