import { combineReducers } from 'redux';
import loadingReducer from '../features/loading/redux/loadingReducer';
import exemploReducer from '../features/Exemplo/redux/exemploReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  exemplo: exemploReducer
});
export default rootReducer;
