import { combineReducers } from 'redux';
import * as globalReducer from './reducer';

export default combineReducers({
    ...globalReducer
});