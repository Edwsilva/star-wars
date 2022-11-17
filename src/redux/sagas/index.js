import { swapi } from "../../services/api";
import types from "../core/actions/types/charactersTypes";
import * as actions from "../core/reducers/charactersSlice";
import { put, call, takeLatest, all } from "redux-saga/effects";

function* loadCharsSaga(action) {
  console.log("ACTION", action.payload);
  let jsonResponse = yield call(swapi, action.payload);

  console.log("JOSNNNNN", jsonResponse);
  yield put({ type: actions.setCharacters, payload: jsonResponse });
  //   yield put(actions.setCharacters(jsonResponse));
}

export default function* rootSaga() {
  yield all([
    // takeLatest(types.LOAD_CHARACTERS_SAGA, loadCharsSaga),
    takeLatest(actions.setCharacters, loadCharsSaga),
  ]);
}
