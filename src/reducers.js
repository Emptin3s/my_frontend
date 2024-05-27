// reducers.js
import { ADD_TODO, DELETE_TODO, UPDATE_TODO_STATE, ADD_TO_CART, REMOVE_FROM_CART, ADD_TODO_ALL } from './actions';

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
            price: action.price,
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
      const newZakaz = action.todos.filter(todo => 
        !state.zakaz.some(existingTodo => existingTodo._id === todo._id)
      );
      return {
        ...state,
        zakaz: [...state.zakaz, ...newZakaz]
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
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item._id !== action.id)
      };
    default:
      return state;
  }
};

export default todo;
