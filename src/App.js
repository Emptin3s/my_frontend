// App.js
import React from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './Menu';
import ToDoList from './ToDoList';
import ToDozakazAdd from './ToDozakazAdd';
import Cart from './Cart';
import { todoAddAll } from './actions';  // убедитесь, что путь правильный

class App extends React.Component {
  componentDidMount(){
    fetch('zakaz').then(function(res){
      return res.json();
    }).then((data)=>{
      this.props.dispatch(todoAddAll(data));  // используем экшен
    });
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Menu />
          <div className="container">
            <Routes>
              <Route path="/" element={<ToDoList />} />
              <Route path="/add" element={<ToDozakazAdd />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default connect()(App);
