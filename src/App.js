import React, { Component } from 'react';
import './App.css';
import Counter from './counter';
import store from './store/';

// the wrapped component of store is mapped here to remove the compiler errors

class App extends Component {
	render() {
		return (
			<div className="App">
				<Counter store={store} />
			</div>
		);
	}
}
export default App;
