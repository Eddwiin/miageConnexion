import React from 'react';
import API from './../../utils/axios';

const INITIAL_STATE = {
    eventName: '',
    eventDate: undefined,
    eventImage: undefined,
    eventDescription: '',
}

export class HomeComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = INITIAL_STATE;
        this.handleChanged = this.handleChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChanged(event) {
        this.setState({ [event.target.name] : event.target.value })
    }


    handleSubmit(event) {
        event.preventDefault();

        API.post('', {

        }).then(() => {

        }).catch();
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Nom de l'événement</label>
                    <input type="text"  name="eventName" onChange={this.handleChanged} />
                </div>

                <div>
                    <label>Date événement</label>
                    <input type="date"  name="eventDate" onChange={this.handleChanged} />
                </div>

                <div>
                    <label>Image</label>
                    <input type="file" name="eventImage" onChange={this.handleChanged} />
                </div>

                <div>
                    <label>Description</label>
                    <textarea name="eventDescription" onChange={this.handleChanged} ></textarea>
                </div>
            </form>
        )
    }
}