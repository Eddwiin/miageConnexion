import React, { useEffect, useState } from "react";
import './details-event.scss'
import { useParams, Link } from "react-router-dom";
import { Navbar } from "../../shared";
import { APP_ROUTES } from "../../../utils/route-config";
import { fetchEventById } from "../../services/event";

const DetailsEvent = () => {

    const { id } = useParams();
    const [currentEvent, setCurrentEvent] = useState()
    
    useEffect(() => {
        fetchEventById(id).then((response) => {
            console.log(response);
            setCurrentEvent(response.data.story);
        }); 
    }, [id])


    return (
        <div className="details-event">
            <div className="details-event__navbar">
                <Navbar>
                    <Link to={APP_ROUTES.HOME}>Login</Link>
                </Navbar>
            </div>

           <div className="details-event__content">
                <img className="details-event__content__img" src={currentEvent?.content.thumbnail} alt={currentEvent?.name} />
            </div>


            <div className="details-event__layout">
                <div className="details-event__layout__title">
                    {currentEvent?.name}
                </div>

                <div className="details-event__layout__content">
                    {currentEvent?.content.content}
                </div>
            </div>
        </div>
    )
}

export default DetailsEvent;