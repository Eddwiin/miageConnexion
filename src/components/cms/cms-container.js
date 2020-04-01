import React, { useEffect, useState, lazy } from "react";
import { Link } from "react-router-dom";
import { Navbar, Card, Autocomplete } from "../shared";
import { fetchEvents } from "../services/event";
import { APP_ROUTES } from "../../utils/route-config";
import "./cms-container.scss";

const Modal = lazy(() =>
  import("./../shared").then(module => ({ default: module.Modal }))
);
const AddEditEvent = lazy(() => import("./add-edit-event/add-edit-event"));
const Button = lazy(() => import('./../shared').then(module => ({default: module.Button} )));
// const NotFound = lazy(() => import('./../shared').then(module => ({ default: module.NotFound }) ));

const CMSContainer = () => {
  const [events, setEvents] = useState([]);
  const [eventsCopy, setEventsCopy] = useState([]);
  const [typeOfModal, setTypeOfModal] = useState(false);
  const [currentCard, setCurrentCard] = useState({})

  useEffect(() => {
    fetchEvents().then(response => {
      setEvents(response.data.stories);
      setEventsCopy(response.data.stories);
    });
  }, []);

  const itemSortedEvent = items => {
    if (items.length > 0) {
      return setEventsCopy(items);
    }
    return setEventsCopy(events);
  };

  const selectEventAuto = (event) => {
    setEventsCopy(
      events.filter(eventCurrent => eventCurrent.name === event.name)
    );
  }

  const showModal = () => {

    const footer = (
      <div>
        <Button label={(!!currentCard) ? "Editer" : "Ajouter"} color="primary"
                style={{ fontSize: "1.5rem" }}/>
      </div>
    )
    
    switch (typeOfModal) {
      case "add":
        return (
          <Modal 
            title="Ajouter un événement" 
            closeModal={closeModal}
            content={<AddEditEvent />}
            footer={footer}
            />
        );

      case "edit":
        return (
          <Modal 
            title={"Editer un événement"} 
            closeModal={closeModal}
            content={<AddEditEvent cardToEdit={currentCard}></AddEditEvent>}
            footer={footer}
          />
        )

      default:
        return setTypeOfModal(undefined);
    }
  };

  const closeModal = () => {
    setTypeOfModal(undefined);
  };


  return (
    <div className="cms">
      
      <div className="cms__navbar">
        <Navbar>
          <Link to="#" onClick={() => { setTypeOfModal("add"); setCurrentCard(undefined) }}>
              Ajouter un événements
          </Link>
          <Link to={APP_ROUTES.LOGOUT}>Déconnexion</Link>
       </Navbar>
      </div>

        <div className="cms__autocomplete">
            <Autocomplete
              items={events}
              keyBind="id"
              valueBind="name"
              placeholder="Search events ..."
              itemSortedEvent={itemSortedEvent}
              selectEvent={selectEventAuto}
              
            ></Autocomplete>
        </div>

        <section className="cms__section">
          {eventsCopy.map(card => {
            return (
              <div key={card.id} onClick={() => { setTypeOfModal("edit"); setCurrentCard(card) }}>
                <Card
                  src={card.content.thumbnail}
                  alt={card.content.title}
                  title={card.content.title}
                  description={card.content.content}
                  created_at={card.created_at}
                />
              </div>
            );
          })}
        </section>

        {typeOfModal && showModal()}
    </div>
  );
};

export default CMSContainer;