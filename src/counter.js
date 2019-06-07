import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
	return (
		<div>
			<h1>Redux-React Counter</h1>
			<p>Count ={props.count}</p>
			<button>Increment</button>
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
export default connect(mapStateToProps)(Counter);
