import React from "react";
import API from "./../../utils/axios";
import CardComponent from "./card/card";

const INITIAL_STATE = {
  events: []
};

export default class ListCardsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  componentWillMount() {
    API.get("events").then(response => {
      this.setState({ events: response.data });
      console.log("my state", this.state);
    });
  }

  render() {
    return (
      <div>
        {this.state.events.map(event => (
          <CardComponent key={event._id} event={event}></CardComponent>
        ))}
        {/* {this.state.evenements.map(evenement => 
                    <CardComponent key={evenement.id} />
                )} */}
      </div>
    );
  }
}
