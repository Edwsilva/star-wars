import { combineReducers } from "redux";
// import charactersReducer from "./reducers/charactersReducer";
import charactersReducer from "./reducers/charactersSlice";

export default combineReducers({
  characters: charactersReducer,
});
