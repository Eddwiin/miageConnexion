import React, { useState, useRef } from 'react';
import { Input, Button, Textarea } from '../../../UI';
import { useForm } from 'react-hook-form';
import API from './../../../helpers/api'

const AddEditEvent = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date())
    const fileInput = useRef(null);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = () => {

        API.post('/event/create', { title, description, date })
            .then(res => {
                console.log(res.data.id);
                const formData = new FormData();
                formData.append(
                    "files",
                    fileInput.current.files[0],
                    `event-${res.data.id}`
                );
                return API.post("/file/upload", formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            })
            .then(console.log)
            .catch(console.error)

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <input type="date" min={new Date().toISOString().slice(0, 10)} value={date}
                    onChange={e => setDate(e.target.value)} required />
                <br /> <br />
            </div>

            <div>
                <br /> <br />
                <input type="file" ref={fileInput} required />
                <br /><br />
            </div>

            <Button label="Sauvegarder" btnStyle={{ width: "25%" }} />
        </form>
    )
}

export default AddEditEvent