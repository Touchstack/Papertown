import { combineReducers } from 'redux';
import formReducer from './formReducer';

const myReducers = combineReducers({
    formReducer,
 });

 export default myReducers;