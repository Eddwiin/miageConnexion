import React, { useState, useEffect }  from "react";
import { Navbar, Slide } from '../shared';
import { Link } from "react-router-dom";
import './home-container.scss';
import { APP_ROUTES } from "../../utils/route-config";
import { fetchEvents } from '../services/event';

const HomeContainer = () => {

  const [events, setEvents] = useState([]);

  useEffect( () => {
    fetchEvents().then((response) => {
      setEvents(response.data.stories)
    })
  }, [])
    
  return (
    <div className="home-container">

      <div className="home-container__navbar">
        <Navbar>
          <Link to={APP_ROUTES.LOGIN}>Login</Link>
        </Navbar>
      </div>
    

      <div className="home-container__slides">
        { events.map((event) => {
          return (
            <React.Fragment key={event.id}>
              <Slide  img={event.content.thumbnail} title={event.content.title} text={event.content.summary} />
            </React.Fragment>
          )
        })}
      </div>
    
    </div>
  )
};

export default HomeContainer;
