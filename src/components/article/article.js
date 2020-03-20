import React, { useState, useEffect } from "react";
import { fetchEvents } from '../services/event';
import "./article.scss";

export const Article = () => {
  const [events, setEvents] = useState([]);

  useEffect( () => {
    fetchEvents().then((response) => {
      setEvents(response.data.stories)
    })
  }, [])

  return (
    <div className="article-section">
      { events.map(event => {
        return(
          <div className="story" key={event.id}>
            <img src={event.content.thumbnail} alt="another" />
            <div className="story__overlay">
              <h4 className="story__overlay-title">{event.content.title}</h4>
              <div className="story__overlay-text">{event.content.summary}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Article;