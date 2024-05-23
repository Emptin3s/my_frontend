// reducers.js
import { ADD_TODO, DELETE_TODO, UPDATE_TODO_STATE, ADD_TO_CART, ADD_TODO_ALL } from './actions';

const initialState = {
  zakaz: [],
  cart: []
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        zakaz: [
          ...state.zakaz,
          {
            _id: action.id,
            name: action.name,
            description: action.description,
            op: action.op,
            done: false
          }
        ]
      };
    case DELETE_TODO:
      return {
        ...state,
        zakaz: state.zakaz.filter(zakaz => zakaz._id !== action.id)
      };
    case UPDATE_TODO_STATE:
      return {
        ...state,
        zakaz: state.zakaz.map(zakaz => zakaz._id === action.id ? { ...zakaz, done: !zakaz.done } : zakaz)
      };
    case ADD_TODO_ALL:
      return {
        ...state,
        zakaz: [...state.zakaz, ...action.todos]
      };
    case ADD_TO_CART:
      const itemInCart = state.cart.find(item => item._id === action.zakaz._id);
      if (itemInCart) {
        return {
          ...state,
          cart: state.cart.map(item => item._id === action.zakaz._id ? { ...item, quantity: item.quantity + 1 } : item)
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.zakaz, quantity: 1 }]
        };
      }
    default:
      return state;
  }
};

export default todo;
