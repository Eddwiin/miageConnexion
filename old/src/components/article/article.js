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
    <div className="story-container">
      { events.map(event => {
        return(
          <React.Fragment key={event.id}>
            <img src={event.content.thumbnail} alt="another" />
            <div className="article-container__story__overlay">
              <h4 className="article-container__story__overlay-title">{event.content.title}</h4>
              <div className="article-container__story__overlay-text">{event.content.summary}</div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Article;