import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SETUP_ROUTES from '../../../configs/setupRoutes';
import { connect } from 'react-redux';
import * as actions from './../../../stores/actions';

const ListEvents = lazy(() => import('./../../components/List-events/List-events'));
const AddUpdateEvent = lazy(() => import('./../../components/Add-update-event/Add-update-event'));

const Cms = (props) => {
    const loadRoutes = () => {
        return (
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path={SETUP_ROUTES.LIST_EVENTS} component={ListEvents} />
                    <Route exact path={SETUP_ROUTES.ADD_EVENT} component={AddUpdateEvent} />
                    <Route exact path={SETUP_ROUTES.UPDATE_EVENT_PARAMS} component={AddUpdateEvent} />
                    <Redirect to={SETUP_ROUTES.LIST_EVENTS} />
                </Suspense>
            </Switch>
        )
    }

    return (
        <div>
            {props.loadNavbar()}
            {loadRoutes()}
        </div>
    )
}

const mapStateToProps = state => ({
    events: state.events
})

const mapDispatchToProps = dispatch => ({
    getEvents: () => dispatch(actions.getEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cms);