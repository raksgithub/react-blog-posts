import { combineReducers } from 'redux';
import postsReducer from './posts-reducer';
import usersReducer from './users-reducers';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});