import { combineReducers } from 'redux';
import jobReducer from './jobReducer';

const rootReducer = combineReducers({
  jobCreate: jobReducer,
});

export default rootReducer;