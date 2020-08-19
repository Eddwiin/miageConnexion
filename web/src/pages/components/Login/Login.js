import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../stores/actions';
import { Input } from '../../../UI';
import { Button } from '../../../UI/Button/Button';

const Login = ({ loadNavbar }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <React.Fragment>
            {loadNavbar()}
            <form data-test="component-login">
                <div>
                    <Input name="email" placeholder="Email" value={email} data-test="email-input"
                        onChange={e => setEmail(e.target.value)} />

                    <Input name="password" placeholder="Password" value={password} data-test="password-input"
                        onChange={e => setPassword(e.target.value)} />

                    <Button label="Se connecter" btnStyle={{ width: "25%" }} />
                </div>
            </form>
        </React.Fragment>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.authUser(email, password))
    }
}
export default connect(null, mapDispatchToProps)(Login)