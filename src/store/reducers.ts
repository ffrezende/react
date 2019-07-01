import { combineReducers } from 'redux';
import loadingReducer from '../features/loading/redux/loadingReducer';

const rootReducer = combineReducers({
  loading: loadingReducer
});
export default rootReducer;
