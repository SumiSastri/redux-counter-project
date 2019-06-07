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
	console.log('map', state);
	return {
		count: state.count
	};
}

// set up actions - payload transfer from component to store Step 2 (action set up)

function mapDispatchToProps(dispatch) {
	return {
		onIncrementClick: () => {
			console.log('click');
			const action = { type: 'INCREMENT' };
			dispatch(action);
		}
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
