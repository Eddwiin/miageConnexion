import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Card } from '../shared';
import { fetchEvents } from '../services/event'; 
// import  Autocomplete  from 'react-autocomplete';
import './cms-container.scss';

const CMSContainer = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(response => {
      console.log(response.data.stories)
      setEvents(response.data.stories)
    })
  }, [])

  return (
    <div className="cms">
      <div className="cms__navbar">
        <Navbar>
          <Link to="#">Log out</Link>
        </Navbar>
      </div>

      <section className="cms__section">
        {events.map((event) => {
          return (
            <div key={event.id}>
              <Card src={event.content.thumbnail} alt={event.content.name} title={event.content.name} 
                    description={event.content.content} created_at={event.created_at} />
            </div>
          )
        })}
      </section>
      

      {/* <Autocomplete
        items={events}
        getItemValue={(event) => event.name}
        renderItem={(event, isHighlighted) =>
          <div key={event.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {event.name}
          </div>
        }
      /> */}
    </div>

  );
};

export default CMSContainer;
