import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
	console.log('render', props);
	return (
		<div>
			<h1>Redux-React Counter</h1>
			<p>Count ={props.count}</p>
			<button onClick={props.onIncrementClick}>Increment</button>
			<button onClick={props.onDecrementClick}>Decrement</button>
		</div>
	);
}
// when state changes in the store we put it in this function
// note the console log updates this when the state changes
// type changes from redux init to increment the new action

function mapStateToProps(state) {
	console.log('mapStateToProps', state);
	return {
		count: state.count
	};
}

// Step 4 Dispatch set up second action - payload transfer from component to store (dispatcher)
// note the console logs only once when the dispatch action is successfully fired
// add second dispatch as it is another object add a comma

function mapDispatchToProps(dispatch) {
	console.log('mapDispatchToProps', dispatch);
	return {
		onIncrementClick: () => {
			console.log('incrementClickWorking');
			const action = { type: 'INCREMENT' };
			dispatch(action);
		},
		onDecrementClick: () => {
			console.log('decrementClickWorking');
			const action = { type: 'DECREMENT' };
			dispatch(action);
		}
	};
}
// connect dispatch actions to store Step 3
// wrap the component with the functions that you are mapping to connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
