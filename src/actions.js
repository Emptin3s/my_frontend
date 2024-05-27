// actions.js
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO_STATE = 'UPDATE_TODO_STATE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'; // Объявление и экспорт REMOVE_FROM_CART
export const ADD_TODO_ALL = 'ADD_TODO_ALL';

export const todoAdd = (id, name, description, op) => ({
  type: ADD_TODO,
  id,
  name,
  description,
  op
});

export const todoDelete = (id) => ({
  type: DELETE_TODO,
  id
});

export const todoUpdateState = (id) => ({
  type: UPDATE_TODO_STATE,
  id
});

export const addToCart = (zakaz) => ({
  type: ADD_TO_CART,
  zakaz
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id
});

export const todoAddAll = (todos) => ({
  type: ADD_TODO_ALL,
  todos
});
