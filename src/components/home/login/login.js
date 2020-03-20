import React from 'react';
import Button from '../../shared/button/button';
import './login.scss';

const Login = () => {
    return (
        <div className="login">
            <form className="form">
                <div className="form__group">
                    <input  id="email" type="email" className="form__control w-100"
                            name="email" placeholder="Email" required />
                    {/* <label htmlFor="email" className="form__label">Email</label> */}
                </div>

                <div className="form__group">
                    <input  id="password" type="password" className="form__control w-100"
                            name="password" placeholder="Password" required />
                    {/* <label htmlFor="password" className="form__label">Password</label> */}
                </div>

                <Button label="Sign in"></Button>
            </form>
        </div>
    )
}

export default Login;