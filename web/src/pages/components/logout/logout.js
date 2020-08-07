import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import APP_ROUTES from '../../../configs/routes';
import * as actions from './../../../stores/actions';
import { connect } from 'react-redux';

const LogoutComponent = ({ onLogout }) => {

    useEffect(() => {
        onLogout();
    });

    return (
        <Redirect to={APP_ROUTES.HOME}></Redirect>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}
export default connect(null, mapDispatchToProps)(LogoutComponent)