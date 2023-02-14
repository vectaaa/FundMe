import { SET_USER_NAME, SET_PASSWORD } from './actions';

//This is the initial state of the input elements
const initialState = {
    name: '',
    password: '',
}

//In the input of the function bellow we put a state and action.
 function userReducer(state = initialState, action) {
    switch(action.type){
        case SET_USER_NAME: 
            return {...state, name: action.payload};
        case SET_PASSWORD:
            return {...state, password: action.payload};
            default:
            return state;
    }
 }
 export default userReducer;
