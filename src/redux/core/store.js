import { createStore, applyMiddleware, compose } from 'redux'
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import combinedReducers from './combinedReducers'
import charactersReducer from './reducers/charactersSlice'
import sagas from '../sagas/'
import createSaga from 'redux-saga'

const sagaMiddleware = createSaga()

// const dev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// export default createStore(
//   charactersReducer,
//     compose(
//         applyMiddleware(sagaMiddleware)
//         // , dev
//     )
// )
const store = createStore(charactersReducer,
 applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas)

export default store;