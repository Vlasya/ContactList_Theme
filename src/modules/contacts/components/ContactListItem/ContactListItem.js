import React from 'react';
import {ListItemUI} from "../../../ui/components/ListItemUI";
import './ContactListItem.css'

export function ContactListItem({item, onDelete, onEdit}) {

    function deleteUser(e,user) {
        onDelete(user)
    }

    function editUser(e,user) {
        onEdit(user)
    }

    return (
        <ListItemUI>
            <div className='contact-list__info'>
                <div className='contact-list__item'>
                    <p>Name: </p><span>{item.name}</span>
                    <p>Surname:</p><span>{item.surname}</span>
                </div>
                <div className='contact-list__item'><p>Phone:</p>{item.phone}</div>
            </div>
            <div className='contact-list__buttons'>
                <button className='contact-list__button' onClick={(e) => editUser(e, item)}>Edit</button>
                <button className='contact-list__button' onClick={(e) => deleteUser(e, item)}> Delete</button>
            </div>
        </ListItemUI>
    );
}

