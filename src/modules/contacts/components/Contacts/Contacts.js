import React, {useState} from 'react';
import {ContactsList} from "../ContactsList";
import {useServices} from "../../hooks/useServices";
import {Button} from "../Button";
import {ContactForm} from "../ContactForm/ContactForm";
import './Contacts.css'

const user = {
    name: '',
    surname: '',
    phone: ''
}

export function Contacts() {
    const {
        userData,
        getData: {getIsLoading},
        saveData: {saveData, saveIsLoading},
        deleteData: {deleteData, deleteIsLoading}
    } = useServices()
    const [formIsShow, setFormIsShow] = useState(false);
    const [editedUser, setEditedUser] = useState(user);

    function toggleForm() {
        setFormIsShow((prev) => !prev)
        setEditedUser(user)
    }

    function onSave(newUser) {
        saveData(newUser)
    }

    function onDelete(user) {
        deleteData(user)
    }

    function onEdit(user) {
        setEditedUser(user)
        setFormIsShow(true)
    }

    return (
        <div className='contacts--wrapper'>
            <div className='contacts--btn'>
                <Button text={formIsShow ? 'Close Form' : 'Show Form'} action={toggleForm}/>
            </div>

            {formIsShow ?
                <ContactForm user={editedUser}
                             onEditUser={setEditedUser}
                             onCloseForm={toggleForm}
                             onSave={onSave}/>
                : <ContactsList getIsLoading={getIsLoading}
                                data={userData}
                                onDelete={onDelete}
                                deleteIsLoading={deleteIsLoading}
                                onEdit={onEdit}
                                saveIsLoading={saveIsLoading}


                />}
        </div>
    );
}

