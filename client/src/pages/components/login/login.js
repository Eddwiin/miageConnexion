import React, { useState } from 'react';
import style from './login.module.scss';
import { Input, Button } from '../../../UI';
import API from './../../../helpers/api';

const LoginComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event) => { 
        event.preventDefault();
        
        API.post('/auth/login', { email, password })
            .then(console.log);
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

export default LoginComponent