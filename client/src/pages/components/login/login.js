import React, { useState } from 'react';
import style from './login.module.scss';
import { Input, Button } from '../../../UI';
// import loginImg  from './../../../assets/images/login.png';

const LoginComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={style.login}>
            <div className={style.login__content}>

                <Input value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Email" inputStyle={{ width: '25%' }} />

                <Input value={password} onChange={e => setPassword(e.target.value)} type="password"
                    placeholder="Password" inputStyle={{ width: '25%' }} />
                
                <Button label="Se connecter" btnStyle={{ width: "25%" }} />
            </div>
        </div>
    )
}

export default LoginComponent