import React from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ToDoList from './ToDoList';
import ToDozakazAdd from './ToDozakazAdd';
import { todoAddAll } from './actions';



class App extends React.Component {
	componentDidMount(){
		fetch('zakaz').then(function(res){
			return res.json();
		}).then((data)=>{
			this.props.dispatch(todoAddAll(data));
		});
	}
	
	
	
	render() {
	  return (
		<div className="row d-flex justify-content-center container">
			<div className="col-md-10">
				<Provider store={this.props.store}>
				<Router>
					<Routes>
						<Route path="/" element={<ToDoList />} />
						<Route path="/add" element={<ToDozakazAdd />} />
					</Routes>
				</Router>
				</Provider>
			</div>
		</div>
	  );
	}
}

export default connect()(App);