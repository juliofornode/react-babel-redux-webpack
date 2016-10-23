//this is the root reducer. It is a convention to call it index.js
import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses
});

export default rootReducer;