import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../stores/actions';

const Login = () => {
    return (
        <div>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.authUser(email, password))
    }
}
export default connect(null, mapDispatchToProps)(Login)