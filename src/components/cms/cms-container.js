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

const CMSContainer = () => {
  const [events, setEvents] = useState([]);
  const [eventsCopy, setEventsCopy] = useState([]);
  const [typeOfModal, setTypeOfModal] = useState(false);

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

  const showModal = () => {
    switch (typeOfModal) {
      case "add":
        return (
          <Modal title="Ajouter un événement" closeModal={closeModal}>
            <AddEditEvent></AddEditEvent>
          </Modal>
        );

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
          <Link to="#" onClick={() => setTypeOfModal("add")}>
            Ajouter un événements
          </Link>
          <Link to={APP_ROUTES.LOGOUT}>Déconnexion</Link>
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
        {eventsCopy.map(event => {
          return (
            <div key={event.id}>
              <Card
                src={event.content.thumbnail}
                alt={event.content.name}
                title={event.content.name}
                description={event.content.content}
                created_at={event.created_at}
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