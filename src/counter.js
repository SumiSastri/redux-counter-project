import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
	console.log('render', props);
	return (
		<div>
			<h1>Redux-React Counter</h1>
			<p>Count ={props.count}</p>
			<button onClick={props.onIncrementClick}>Increment</button>
			<button>Decrement</button>
		</div>
	);
}
function mapStateToProps(state) {
	console.log('mapStateToProps', state);
	return {
		count: state.count
	};
}

// set up second action - payload transfer from component to store (dispatcher)

function mapDispatchToProps(dispatch) {
	return {
		onIncrementClick: () => {
			console.log('incrementClickWorking');
			const action = { type: 'INCREMENT' };
			dispatch(action);
		}
	};
}
// connect dispatch actions to store

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
