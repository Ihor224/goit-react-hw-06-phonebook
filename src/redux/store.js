import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const reducer = (state = initialState, action) => state;

const store = createStore(reducer, composeWithDevTools());

export default store;
