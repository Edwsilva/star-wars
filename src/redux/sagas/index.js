import { swapi } from "../../services/api";
import types from "../core/actions/types/charactersTypes";
import * as actions from "../core/reducers/charactersSlice";
import { put, call, takeLatest, all } from "redux-saga/effects";

function* loadCharsSaga(action) {
  console.log("ACTION", action.payload);
  let jsonResponse = yield call(swapi, action.payload);

  //  TODAS AS CHAMADAS ABAIXO FUNCIONAM...
  // yield put(actions.getCharactersSuccess(jsonResponse.results));
   //  yield put({ type: actions.getCharactersSuccess, payload: jsonResponse.results });
     yield put({ type: actions.getCharactersSuccess.type, payload: jsonResponse.results });
  
}

export default function* rootSaga() {
  yield all([
    // takeLatest(types.LOAD_CHARACTERS_SAGA, loadCharsSaga),
    takeLatest('characters/getCharacters', loadCharsSaga),
  ]);
}
