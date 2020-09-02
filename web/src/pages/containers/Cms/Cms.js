import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import SETUP_ROUTES from '../../../configs/setupRoutes';

const AddEditEvent = lazy(() => import('./../../components/Add-edit-event/Add-edit-event'));

const Cms = ({ loadNavbar }) => {

    const loadRoutes = () => {
        return (
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route path={SETUP_ROUTES.ADD_EVENT} component={AddEditEvent} />
                </Suspense>
            </Switch>
        )
    }

    return (
        <div>
            {loadNavbar()}

            {loadRoutes()}
        </div>
    )
}

export default Cms;