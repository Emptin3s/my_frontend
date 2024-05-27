// ToDozakazAdd.js
import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { todoAdd } from './actions';

class ToDozakazAddInner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      op: '',
      price: ''
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onOpChange = this.onOpChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
  }

  onNameChange(e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  onDescriptionChange(e) {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  onOpChange(e) {
    e.preventDefault();
    this.setState({ op: e.target.value });
  }

  onPriceChange(e) {
    e.preventDefault();
    this.setState({ price: e.target.value });
  }

  onAddFormSubmit(e) {
    e.preventDefault();
    
    fetch('zakaz', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        op: this.state.op,
        price: this.state.price
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json();
    }).then((data) => {
      this.props.dispatch(todoAdd(data._id, data.name, data.description, data.op, data.price));
      this.props.history('/');
    });
  }

  render() {
    return (
      <div className="card-hover-shadow-2x mb-3 card">
        <div className="card-header-tab card-header">
          <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i className="fa fa-zakaz"></i>&nbsp;Добавить заказ
          </div>
        </div>
        <form onSubmit={this.onAddFormSubmit}>
          <div className="widget-content">
            <div className="widget-content-wrapper">
              <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder="Название" className="form-control" />
              <input type="text" value={this.state.description} onChange={this.onDescriptionChange} placeholder="Описание" className="form-control" />
              <input type="text" value={this.state.op} onChange={this.onOpChange} placeholder="Содержание заказа" className="form-control" />
              <input type="text" value={this.state.price} onChange={this.onPriceChange} placeholder="Цена" className="form-control" />
              <input type="submit" value="Добавить" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <div className="d-block text-right card-footer">
          <NavLink to='/' className="btn btn-primary"> Вернуться </NavLink>
        </div>
      </div>
    )
  }
}

const ToDozakazAdd = (props) => {
  return (
    <ToDozakazAddInner {...props} history={useNavigate()} />
  )
}

export default connect()(ToDozakazAdd);
