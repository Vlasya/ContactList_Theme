import {CONTACTS_URL} from "../constants";
import api from '../../../api';

export function getInfo() {
    return api.get(CONTACTS_URL);
}

export function addInfo(data) {
    return api.post(CONTACTS_URL, data)
}

export function updateInfo(data) {
    return api.put(`${CONTACTS_URL}/${data.id}`, data)
}

export function deleteInfo(id) {
    return api.delete(`${CONTACTS_URL}/${id}`)
}