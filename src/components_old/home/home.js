import React from "react";
import API from "./../../utils/axios";

const INITIAL_STATE = {
  eventName: "",
  eventDate: undefined,
  eventFile: React.createRef(),
  eventDescription: ""
};

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.handleChanged = this.handleChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChanged(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleUpload(event) {
    this.setState({ eventFile: event.target.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();

    const event = {
      name: this.state.eventName,
      date: this.state.eventDate,
      description: this.state.eventDescription
    };

    API.post("private/addEvent", event).then(result => {
      const formData = new FormData();
      formData.append("images", this.state.eventFile);
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      API.post(
        "private/uploadEvent?id=" + result.data.eventAdded._id,
        formData,
        config
      ).then(() => {
        console.log("uploaded");
      });
    });
    // const formData = new FormData();
    // formData.append('myImage', this.state.eventFile);
    // const config = {
    //     headers: {
    //         'content-type': 'multipart/form-data'
    //     }
    // };

    //  const event = {
    //     name: this.state.eventName,
    //     date: this.state.eventDate,
    //     file: formData,
    //     description: this.state.eventDescription
    // };

    // API.post('private/addEvent', formData, config).then(() => {

    // });
    // const event = {
    //     name: this.state.eventName,
    //     date: this.state.eventDate,
    //     file: this.state.eventFile
    //     description: this.state.eventDescription
    // }

    // API.post('private/addEvent', event).then(() => {

    // }).catch();

    // let reader = new FileReader();
    // reader.readAsDataURL(this.state.eventImage.current.files[0]);
    // reader.onload =  () => {

    //     const event = {
    //         name: this.state.eventName,
    //         date: this.state.eventDate,
    //         image: reader.result,
    //         description: this.state.eventDescription
    //     }

    //     API.post('private/addEvent', event).then(() => {

    //     }).catch();
    // };
    // const event = {
    //     name: this.state.eventName,
    //     date: this.state.eventDate,
    //     image: this.state.eventImage.current.files[0],
    //     description: this.state.eventDescription
    // }
    // console.log(event);
    // API.post('private/addEvent', event).then(() => {

    // }).catch();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Nom de l'événement</label>
          <input type="text" name="eventName" onChange={this.handleChanged} />
        </div>

        <div>
          <label>Date événement</label>
          <input type="date" name="eventDate" onChange={this.handleChanged} />
        </div>

        <div>
          <label>Image</label>
          <input type="file" name="eventImage" onChange={this.handleUpload} />
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="eventDescription"
            onChange={this.handleChanged}
          ></textarea>
        </div>

        <button type="submit">Save</button>
      </form>
    );
  }
}
