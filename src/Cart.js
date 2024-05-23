// Cart.js
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Cart = ({ cart }) => {
  return (
    <div className="container">
      <h2>Корзина</h2>
      <ul className="list-group">
        {cart.map(item => (
          <li className="list-group-item" key={item._id}>
            <div>{item.name}</div>
            <div>Количество: {item.quantity}</div>
          </li>
        ))}
      </ul>
      <NavLink to="/" className="btn btn-primary mt-3">Вернуться</NavLink>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Cart);
