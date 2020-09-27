import React, { lazy } from 'react';
import { connect } from 'react-redux';
import style from './Home.module.scss';

const Slide = lazy(() => import('./../../../UI').then(mod => ({ default: mod.Slide })));
const NotFound = lazy(() => import('./../../../UI').then(mod => ({ default: mod.NotFound })));

const Home = (props) => {
    return (
        <React.Fragment>
            {props.events.length === 0 && <NotFound message="Aucun événement pour le moment" />}
            {props.events.length > 0 && (
                <div className={style.home}>
                    <div className={style.home__slides}>
                        {props.events.map(event => (
                            <Slide
                                key={event.eventId}
                                src={`${process.env.REACT_APP_API}/event/${event.imgName}`}
                                title={event.title}
                                description={event.description}
                            />
                        ))}
                    </div>
                </div>
                // <div className={style.home}>
                //     <div className={style.home__slides}>
                //         {props.events.map(event => (
                //             <Slide
                //                 key={event.eventId}
                //                 src={`${process.env.REACT_APP_API}/event/${event.imgName}`}
                //                 title={event.title}
                //                 description={event.description} />
                //             //   />
                //             // <div className={style.home__slide} key={event.eventId}>
                //             //     <figure>
                //             //         <img src={`${process.env.REACT_APP_API}/event/${event.imgName}`} className={style.home__slide__img}  />
                //             //         <figcaption>{event.title}</figcaption>  
                //             //     </figure>
                //             //     <Slide src={`${process.env.REACT_APP_API}/event/${event.imgName}`} title={event.title} description={event.description} />
                //             // </div>
                //         ))}
                // </div>
                // </div>
            )}
        </React.Fragment>

    )
}

const mapStateToProps = state => ({
    events: state.events
})

export default connect(mapStateToProps)(Home);
