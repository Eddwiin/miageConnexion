import React from 'react';
import API from './../../utils/axios';
import CardComponent from './card/card';

export default class ListCardsComponent extends React.Component {

    constructor(props) {
        super(props)
        const evenements = [
            {
                id: 'ev1',
                name: 'Evenement 1',
                url: 'http://env1.com'
            },
            {
                id: 'ev2',
                name: 'Evenement 2',
                url: 'http://env2.com'
            },
            {
                id: 'ev3',
                name: 'Evenement 3',
                url: 'http://env3.com'
            },
            {
                id: 'ev4',
                name: 'Evenement 4',
                url: 'http://env4.com'
            }
        ]
        this.state = {
            evenements: [...evenements]
        }
    }
    componentDidMount() {
        API.get('') // A remplir avec l'url storyblock pour récupérer les événements
            .then(console.log);
    }

    render() {
        return(
            <div className="scrolling-wrapper-flexbox">
                {this.state.evenements.map(evenement => 
                    <CardComponent key={evenement.id} />
                )}
            </div>
        )
    }
}
