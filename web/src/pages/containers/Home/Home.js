import React, { useEffect, lazy, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../stores/actions';

const Slide = lazy(() => import('./../../../UI').then(mod => ({ default: mod.Slide })))
const Home = ({ loadNavbar, events, getEvents }) => {

    const [eventsTest] = useState([{
        eventId: 2,
        title: "My title test",
        description: "My description worked",
        imgName: '5f51682a1c9cbe2708488223.jpg'
    }]);

    useEffect(() => {
        // getEvents();
        console.log(events);
    })

    return (
        <React.Fragment>
            {loadNavbar()}
            <div className="">
                {eventsTest.map(event => (
                    <div key={event.eventId}>
                        <Slide src={`${process.env.REACT_APP_API}/event/${event.imgName}`} title={event.title} description={event.description}  />
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    events: state.events
})

const mapDispatchToProps = dispatch => ({
    getEvents: () => dispatch(actions.getEvents())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);