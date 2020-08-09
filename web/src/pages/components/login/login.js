import React, { useState } from 'react';
import style from './login.module.scss';
import { Input, Button } from '../../../UI';
import { connect } from 'react-redux';
import * as actions from './../../../stores/actions';
import { useForm } from 'react-hook-form';
import { passwordRegex } from '../../../helpers/form-validation';

const LoginComponent = ({ onAuth, loadNavbar }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = () => {
        console.log("onSubmit");
        onAuth(email, password)
    }

    return (
        <React.Fragment>
            {loadNavbar()}
            <form onSubmit={handleSubmit(onSubmit)} className={style.login}>
                <div className={style.login__content}>
                    <Input name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                        inputStyle={{ width: "25%" }} type="email"
                        register={register({
                            required: "Email is required",
                        })}
                        errorsTemplate={errors?.email && <React.Fragment>{errors.email.message}</React.Fragment>} />

                    <Input name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
                        type="password" inputStyle={{ width: "25%" }}
                        register={register({
                            required: "Password is required",
                            pattern: {
                                value: passwordRegex(),
                                message: "Password must contain at least 8 characters"
                            }
                        })}
                        errorsTemplate={errors?.password && <React.Fragment>{errors.password.message}</React.Fragment>}
                    />

                    <Button label="Se connecter" btnStyle={{ width: "25%" }} />
                </div>
            </form>
        </React.Fragment>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
    }
}
export default connect(null, mapDispatchToProps)(LoginComponent)