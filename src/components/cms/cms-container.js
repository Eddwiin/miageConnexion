import React from "react";
import ImageUploader from "react-images-upload";
import Button from "./../shared/button";

const CMSContainer = () => {
  return (
    <div className="cms">
      <div className="cms__content">
        <div className="cms__content__title">
          <div class="cms__content__title__input">
            <input type="text" name="title" placeholder="title"></input>
          </div>
        </div>

        <div className="cms__content__description">
          <textarea id="description" name="description" rows="10" cols="50" />
        </div>

        <div>
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          />
        </div>

        <div class="cms__content__submit">
          <Button label="Submit"></Button>
        </div>
      </div>
    </div>
  );
};

export default CMSContainer;
