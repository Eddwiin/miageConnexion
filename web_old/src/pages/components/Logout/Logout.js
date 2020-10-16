import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../stores/actions';
import { Redirect } from 'react-router-dom';
import SETUP_ROUTES from '../../../configs/setupRoutes';

export const UnconnectedLogout = ({ onLogout }) => {

    React.useEffect(() => {
        onLogout();
    })

    return <Redirect to={SETUP_ROUTES.HOME} />
}

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch(actions.logout())
})

export default connect(null, mapDispatchToProps)(UnconnectedLogout);