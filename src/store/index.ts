import { createStore, applyMiddleware, Store, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const enhancedMiddewares: StoreEnhancer = applyMiddleware(thunk);

const initialState = {};
const store: Store = createStore(rootReducer, initialState, enhancedMiddewares);

export type AppState = ReturnType<typeof rootReducer>;
export default store;
