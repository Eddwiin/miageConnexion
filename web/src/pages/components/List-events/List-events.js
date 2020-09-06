import React, { useState } from 'react';
import { Card } from '../../../UI';
import style from './List-events.module.scss'
import { useHistory } from "react-router-dom";
import SETUP_ROUTES from '../../../configs/setupRoutes';

const ListEvents = () => {

    const [eventsTest] = useState([{
        eventId: "5f54ddc13bde8c2999300c77",
        title: "My title test",
        description: "My description worked",
        imgName: '5f54ddc13bde8c2999300c77.jpg'
    }]);

    const history = useHistory();

    const onClick = (eventId) => history.push(`${SETUP_ROUTES.UPDATE_EVENT}/${eventId}`)

    return (
        <div className={style.events}>
            {eventsTest.map(event => (
                <Card   key={event.eventId} src={`${process.env.REACT_APP_API}/event/${event.imgName}`} 
                        alt={event.title} description={event.description} onClick={() => onClick(event.eventId)} />
                
            ))}
        </div>
    )
}

export default ListEvents