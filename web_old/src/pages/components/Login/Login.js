import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../stores/actions';
import { Input } from '../../../UI';
import { Button } from '../../../UI/Button/Button';
import style from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { emailRegex, passwordRegex } from '../../../helpers/form-validation';

export const UnconnectedLogin = ({ loadNavbar, onAuth }) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { register, handleSubmit, errors } = useForm();

    return (
        <React.Fragment>
            {loadNavbar()}
            <form data-test="form-login"
                noValidate
                onSubmit={handleSubmit(() => onAuth({ email, password }) )}
                className={style.login}>

                {/* <div>
                    <img src={avatarLogin} alt="avatar-login" />
                </div> */}

                <div className={style.login__content}>
                    <Input name="email" placeholder="Email" value={email} data-test="email-input"
                        inputStyle={{ width: "25%" }} onChange={e => setEmail(e.target.value)} type="email"
                        register={register({
                            required: "Email is required",
                            pattern: {
                                value: emailRegex(),
                                message: 'Invalid email format'
                            }
                        })}
                        errorsTemplate={errors?.email && <React.Fragment>{errors.email.message}</React.Fragment>} />

                    <Input name="password" placeholder="Password" value={password} data-test="password-input"
                        inputStyle={{ width: "25%" }} onChange={e => setPassword(e.target.value)} type="password"
                        register={register({
                            required: 'Password is required',
                            pattern: {
                                value: passwordRegex(),
                                message: "Password must contain at least 8 characters with one uppercase letter, one lowercase letter and one number"
                            },
                        })}
                        errorsTemplate={errors?.password && <React.Fragment>{errors.password.message}</React.Fragment>} />

                    <Button label="Se connecter" btnStyle={{ width: "25%" }} data-test="button-form" />
        
                </div>
            </form>
        </React.Fragment>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (payload) => dispatch(actions.authUser(payload)),
    }
}
export default connect(undefined, mapDispatchToProps)(UnconnectedLogin)