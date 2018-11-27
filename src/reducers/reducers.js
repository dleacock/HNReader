import { combineReducers } from 'redux';
import { RECEIVE_POST } from "../actions/actions";

// Using combined reducers for future features to implement. Next
// feature would be to add a timestamp of when the api call was
// last made. That would be stored in the state and is independant of
// the the actual posts so it can be it's own reducer.

function posts(
    state = {},
    action){
    switch(action.type){
        case RECEIVE_POST:
            return Object.assign({}, state, {
                [action.index]: getPost(state[action.index], action)
            });
        default:
            return state;
    }
}

function getPost(state, action){
    return Object.assign({}, state, {
        title: action.title,
        url: action.url
    })
}


const rootReducer = combineReducers({
    posts
});

export default rootReducer