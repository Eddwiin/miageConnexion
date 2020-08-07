import React, { useState } from 'react';
import style from './login.module.scss';
import { Input, Button } from '../../../UI';
import { connect } from 'react-redux';
import * as actions from './../../../stores/actions';

const LoginComponent = ({ onAuth }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event) => { 
        event.preventDefault();
        onAuth(email, password)
    }

    return (
        <form onSubmit={onSubmit} className={style.login}>
            <div className={style.login__content}>

                <Input value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Email" inputStyle={{ width: '25%' }} />

                <Input value={password} onChange={e => setPassword(e.target.value)} type="password"
                    placeholder="Password" inputStyle={{ width: '25%' }} />
                
                <Button label="Se connecter" btnStyle={{ width: "25%" }} />
            </div>
        </form>
    )
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth:  (email, password) => dispatch(actions.auth(email, password)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)