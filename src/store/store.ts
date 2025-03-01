import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';

import sagas from './sagas';
import reducers from './slices';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: gDM => gDM().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type IRootState = ReturnType<typeof reducers>;

export default store;
