import React, { useState } from 'react';
import { Input, Button, Textarea } from '../../../UI';

const AddEditEvent = () => {

    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');

    return (
        <form>
            {/* <Field name="title" component={titleInput} placeholder="Titre"
                value={title} onChange={e => setTitle(e.target.value)} />

            <Field name="description" component={descriptTextarea} placeholder="Description"
                value={description} onChange={e => setDescription(e.target.value)} /> */}

            <Button label="Sauvegarder" btnStyle={{ width: "25%" }} />
        </form>
    )
}

export default AddEditEvent