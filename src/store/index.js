import { reducer }  from './reducer'
import { applyMiddleware, createStore,compose } from 'redux';
import thunk from 'redux-thunk'

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    createComposer(applyMiddleware(thunk))
);




