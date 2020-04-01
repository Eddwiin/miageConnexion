import React, { useState, useEffect }  from "react";
import { Navbar, Slide } from '../shared';
import { Link, useHistory } from "react-router-dom";
import './home-container.scss';
import { APP_ROUTES } from "../../utils/route-config";
import { fetchEvents } from '../services/event';

const HomeContainer = () => {

  const [events, setEvents] = useState([]);
  const history = useHistory();

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
            <div key={event.id} onClick={() => history.push(`/details-event/${event.id}`)}>
              <Slide  img={event.content.thumbnail} title={event.content.title} text={event.content.summary} />
            </div>
          )
        })}
      </div>
    
    </div>
  )
};

export default HomeContainer;
