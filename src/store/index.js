import { createStore } from 'redux';

// set initial state in store - Step 1

const initialState = {
	count: 0
};

// create reducer function in store - Step 2
// set up the reducer param - action in counter.js

const reducer = (state = initialState, action) => {
	console.log('reducer running', action);

	// set up the conditions of the action to be dispatched - here add 1 to original state
	// object assign to brand new object to copy it - like a spread operator

	switch (action.type) {
		case 'INCREMENT':
			return Object.assign({}, state, { count: state.count + 1 });
		default:
			return state;
	}
};

const store = createStore(reducer);

export default store;
