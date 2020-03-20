import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../shared/navbar/navbar';
import { fetchEvents } from '../services/event'; 
import  Autocomplete  from 'react-autocomplete';
import './cms-container.scss';

const CMSContainer = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(response => {
      console.log(response)
      setEvents(response.data.stories)
    })
  }, [])

  return (
    <div className="cms">
      <Navbar>
        <Link to="#">Log out</Link>
      </Navbar>

      <Autocomplete
        items={events}
        getItemValue={(event) => event.name}
        renderItem={(event, isHighlighted) =>
          <div key={event.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {event.name}
          </div>
        }
      />
    </div>

  );
};

export default CMSContainer;
