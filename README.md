# REDUX:

Initial dependencies set up
npx create-react-app “name of project”
npm install redux react-redux --save

#### You Tube resources used

Edureka
Hitesh Chowdhary
Eric Sowell

## What is redux?

It is a form of data-flow control -  Dan Abramov and Andrew Clark 2015 influenced by ELM & React-flux
Data flows from the component via an action (or payload) the action is dispatched to the store which has a reducer
Functions from the reducer run and are sent back to the component the state is updated and rendered

## Why redux?
This unidirectional flow allows any component to pass data to any other component. it solves the problem in React where data can only flow from the parent to the child, therefore can not flow from the child to parent, grandparent or sibling components.

Redux is useful to scale an app when there is a need to change state in multiple places.

Data is normalized in one location so you can have copies of data (state)all in sync so that all data-copies are known to each other, this eliminates ‘lurking’ copies of state (data).

Redux in the app complexity curve
Browser-based        / DOM manipulation / scale DOM manipulation  /   more complex data flow
js                              /  j-query                    / react-js                             / react-redux

## Steps

Create the basic framework of a component in React
Link to main app 

1. Create a store (object) Store handle all state changes in one place for system security/ stability as well as handling complex data flows
   
    * set initial state - the store holds the values in state which can be accessed by the getState() method
    * It is read only and changes come via reducer function
    * Reducer (state, action) changes intial state via pure functions and payload from action
    * These changes sent to the root reducer which dispatches the changes store.dispatch()
    *  Changes received by the components that subscribe to the changes subscribe(listener) or unsubscribe(listener)

```
import { createStore } from 'redux';

const initialState = {
	count: 0
};

const reducer = (state = initialState, action) => {
	console.log('reducer running', action);
	return state;
};

const store = createStore(reducer);

export default store;
```  

2. Create the Reducer method - updates state changes with data flowing from app
    * Reducer (state, action) is a pure function which sends data (payloads) from the app components to the store
    * Actions - are only payloads of data / they must be defined as a string constant/ must have a type of action property (prop)/ an have more props added to it - actions are 2 types creators and dispatchers - this is a creator (see 4 for the dispatcher example)

```
const reducer = (state = initialState, action) => {
	console.log('reducer running', action);	
	switch (action.type) {
		case 'INCREMENT':
			return Object.assign({}, state, { count: state.count + 1 });
		default:
			return state;
	}
};
```
    * Reducer changes state via pure functions
        *  The functions written in a reducer determines the changes needed or how state can be mutated - usually done with conditionals (switch) here we are incrementing state by 1 in the function written
        *  If no change is needed the previous state is returned to the component and no updates are made
        *  Root reducer makes copies of state and changes and then can make multiple reducers, this is called the state tree that can be traced back to the root reducer
        *  Pure functions means no api-calls, routing transitions returned in the reducers
        *  Functions with dependencies like Math/ date functions (math.random/date.now) can not be passed

3. Set up Subscribe - The components that need to be aware of state subscribe to the store
    * components are set up with listeners to subscribe to these payload changes via the subscribe(listener) method
    * you can also unsubscribe by switching the listener off

4. Dispatch changes to the components that have subscribed to the changes

    * store.dispatch(action) function

    ```
    function mapDispatchToProps(dispatch) {
	return {
		onIncrementClick: () => {
			console.log('incrementClickWorking');
			const action = { type: 'INCREMENT' };
			dispatch(action);
		}
	};
}
    ```

    These dispatch functions are connected via the {connect} import to the counter component and exported back to the store

5. View or Render
    * Displays data provided by store via the smart (stateful) pass down functions via props(are functions) to  dumb (stateless) components
    * The stateless component provide information to the smart (stateful) components if any action is required (via the functions or props they receive and send back) as call back functions in the smart (stateful) component
