import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
// import itemsTypes from './items-types';

export const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

// const addContact = ({ name, number }) => ({
//   type: itemsTypes.ADD_CONTACT,
// payload: {
//   id: uuidv4(),
//   name,
//   number,
// },
// });

export const deleteContact = createAction('contacts/delete');

// const deleteContact = contactId => ({
//   type: itemsTypes.DELETE_CONTACT,
//   payload: contactId,
// });

export const changeFilter = createAction('contacts/changeFilter');

// const changeFilter = value => ({
//   type: itemsTypes.CHANGE_FILTER,
//   payload: value,
// });

// export default { addContact, deleteContact, changeFilter };
