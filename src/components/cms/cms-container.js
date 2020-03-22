import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Card } from '../shared';
import { fetchEvents } from '../services/event'; 
// import  Autocomplete  from 'react-autocomplete';
import { Autocomplete } from '../shared';
import './cms-container.scss';

const CMSContainer = () => {

  const [events, setEvents] = useState([]);
  const [eventsCopy, setEventsCopy] = useState([]);

  useEffect(() => {
    fetchEvents().then(response => {
      setEvents(response.data.stories)
      setEventsCopy(response.data.stories)
    })
  },[])


  const itemSortedEvent = (items) => {
    if (items.length > 0) {
      return setEventsCopy(items);
    }

    return setEventsCopy(events);
  }

  
  return (
    <div className="cms">
      <div className="cms__navbar">
        <Navbar>
          <Link to="#">Log out</Link>
        </Navbar>
      </div>

      <div className="cms__options">
        <div className="cms__options__autocomplete">
          <Autocomplete
             items={events} 
             keyBind="id" 
             valueBind="name"
             itemSortedEvent={itemSortedEvent}
             placeholder="Search events ..."
          ></Autocomplete>
        </div>
      </div>


      <section className="cms__section">
        {eventsCopy.map((event) => {
          return (
            <div key={event.id}>
              <Card src={event.content.thumbnail} alt={event.content.name} title={event.content.name} 
                    description={event.content.content} created_at={event.created_at} />
            </div>
          )
        })}
      </section>
    
 
    </div>

  );
};

export default CMSContainer;
