// Cart.js
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeFromCart } from './actions';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="container">
      <h2>Корзина</h2>
      <ul className="list-group">
        {cart.map(item => (
          <li className="list-group-item" key={item._id}>
            <div>{item.name}</div>
            <div>Количество: {item.quantity}</div>
            <button className="btn btn-danger" onClick={() => removeFromCart(item._id)}>Удалить</button>
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

const mapDispatchToProps = {
  removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);