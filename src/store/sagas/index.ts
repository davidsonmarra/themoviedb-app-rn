import {all} from 'redux-saga/effects';

import moviesSagas from './moviesSaga';

function* rootSaga() {
  yield all([moviesSagas()]);
}

export default rootSaga;
