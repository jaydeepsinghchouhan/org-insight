import { call, put, takeLatest } from 'redux-saga/effects';
import {  setEmployees } from './actions';
import { getEmployees } from '../../network/employeeApis';

function* fetchEmployeesSaga() {
  try {
    const employees = yield call(getEmployees);
    yield put(setEmployees(employees));
  } catch (e) {
    // handle error (show notification or log)
    console.warn(e);
    
  }
}

export default function* rootSaga() {
  yield takeLatest('FETCH_EMPLOYEES_REQUEST', fetchEmployeesSaga);
}
