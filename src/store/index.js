import { createStore } from 'redux';

// set initial state in store

const initialState = {
	count: 0
};

// create reducer function

const reducer = (state = initialState, action) => {
	console.log('reducer running', action);
	return state;
};

const store = createStore(reducer);

export default store;
