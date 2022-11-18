import { createStore, applyMiddleware } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import combinedReducers from "./combinedReducers";
import sagas from "../sagas/";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

// const dev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// export default createStore(
//   charactersReducer,
//     compose(
//         applyMiddleware(sagaMiddleware)
//         // , dev
//     )
// )
// const reducer = combinedReducers({
//   charactersReducer,
// });

const store = configureStore({
  reducer: {films: combinedReducers},
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
