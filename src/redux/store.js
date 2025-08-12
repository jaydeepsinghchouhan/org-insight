import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import employeeReducer from './employees/reducer';
import rootSaga from './employees/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
