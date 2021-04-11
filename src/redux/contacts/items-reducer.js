import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import * as itemsTypes from './items-types';
import * as itemsActions from './items-actions';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case itemsTypes.ADD_CONTACT:
//       return [...state, payload];

//     case itemsTypes.DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

const items = createReducer([], {
  [itemsActions.addContact]: (state, { payload }) =>
    state.find(
      contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
    )
      ? alert(`${payload.name} is already in contacts`)
      : [payload, ...state],
  [itemsActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case itemsTypes.DELETE_CONTACT:
//       return payload;

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [itemsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
