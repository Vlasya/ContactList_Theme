import React from 'react';
import {ListUI} from "../../ui/components/ListUI";
import {ContactListItem} from "./ContactListItem/ContactListItem";
import {Spinner} from "../../common/components/Spinner";

export function ContactsList({data, getIsLoading, onDelete, onEdit, saveIsLoading, deleteIsLoading}) {
    return (
        <ListUI>
            {!getIsLoading && !saveIsLoading && !deleteIsLoading
                ? data && data.map((item) => <ContactListItem key={item.id}
                                                              item={item}
                                                              onDelete={onDelete}
                                                              onEdit={onEdit}/>)
                : <Spinner/>}
        </ListUI>
    );
}

