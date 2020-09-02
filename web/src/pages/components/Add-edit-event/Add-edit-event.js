import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Input, Textarea, Button } from '../../../UI';
import * as actions from './../../../stores/actions';

export const UnconnectedAddEditEvent = ({ onAddEvent }) => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const fileInput = useRef(null);
    const { register, handleSubmit, errors } = useForm();

    return (
        <form onSubmit={handleSubmit(() => onAddEvent({ title, description, file: fileInput.current.files[0] }))}>
            <Input name="title" placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)}
                inputStyle={{ width: "25%" }} type="text"
                register={register({
                    required: "Title is required",
                })}
                errorsTemplate={errors?.title && <React.Fragment>{errors.title.message}</React.Fragment>} />

            <Textarea name="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}
                textAreaStyle={{ width: "25%" }}
                register={register({
                    required: "Description is required",
                })}
                errorsTemplate={errors?.description && <React.Fragment>{errors.description.message}</React.Fragment>} />

            <div>
                <br /> <br />
                <input type="file" ref={fileInput} required />
                <br /><br />
            </div>

            <Button label="Sauvegarder" btnStyle={{ width: "25%" }} />
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAddEvent: (payload) => dispatch(actions.addEvent(payload))
    }
}

export default connect(null, mapDispatchToProps)(UnconnectedAddEditEvent)