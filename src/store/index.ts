import { createStore, applyMiddleware, Store, StoreEnhancer, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const enhancedMiddewares: StoreEnhancer = compose(
  applyMiddleware(thunk),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

//const enhancedMiddewares: StoreEnhancer = applyMiddleware(thunk);

const initialState = {};
const store: any = createStore(rootReducer, initialState, enhancedMiddewares);

export type AppState = ReturnType<typeof rootReducer>;
export default store;
