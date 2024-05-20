import { combineReducers } from 'redux';

import { TODO_ADD, TODO_ADD_ALL, TODO_DELETE, TODO_UPDATE_STATE} from './actions';


function todo(state = [], action) {
	switch (action.type) {
		case TODO_ADD:
			return [
				...state,
				{
					_id: action._id, 
					name: action.name, 
					description: action.description, 
					done: false,
					op: action.op
				}
			]
		case TODO_ADD_ALL:
			return [
				...action.todo_list
			]
		case TODO_DELETE:
			return state.filter(function(zakaz){
				return zakaz._id !== action._id;
			})
		case TODO_UPDATE_STATE:
			return state.map(function(zakaz){
				if (zakaz._id === action._id){
					return {...zakaz, done: !zakaz.done}
				}
			return zakaz
			})
		default:
		return state
	}
}

export default combineReducers({
	zakaz: todo
});