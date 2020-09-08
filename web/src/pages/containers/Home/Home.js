import React, { lazy } from 'react';
import { connect } from 'react-redux';

const Slide = lazy(() => import('./../../../UI').then(mod => ({ default: mod.Slide })));

const Home = (props) => {

    return (
        <React.Fragment>
            {props.loadNavbar()}
            <div className="">
                {props.events.map(event => (
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

export default connect(mapStateToProps)(Home);
