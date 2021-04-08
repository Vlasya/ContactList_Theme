import React from 'react';
import './ContactForm.css'
import {Button} from "../Button";

export function ContactForm({user, onEditUser, onCloseForm, onSave}) {

    function handlerInput(e) {
        onEditUser({
                ...user,
                [e.target.name]: e.target.value
            }
        )
    }

    function handlerSubmit(e) {
        e.preventDefault()
        onSave(user)
        onCloseForm()

    }

    return (
        <form className='contact-form' onSubmit={handlerSubmit}>
            <div className='contact-form__input'>
                <label htmlFor="name">Name :</label>
                <input id='name'
                       value={user.name}
                       name='name'
                       type="text"
                       onChange={handlerInput}
                />
            </div>
            <div className='contact-form__input'>
                <label htmlFor="surname">Surname :</label>
                <input id='surname'
                       value={user.surname}
                       type="text"
                       name='surname'
                       onChange={handlerInput}
                />
            </div>
            <div className='contact-form__input'>
                <label htmlFor="phone">Phone :</label>
                <input id='phone'
                       value={user.phone}
                       type="text"
                       name='phone'
                       onChange={handlerInput}
                />
            </div>
            <div className='contact-form__buttons'>
                <Button type='submit' text='Add'/>
                <Button text='Cancel' action={onCloseForm}/>
            </div>
        </form>

    );
}

