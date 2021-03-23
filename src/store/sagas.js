import { all } from 'redux-saga/effects';

import {projectSaga}  from './project/sagas';

export default function* rootSaga() {
    yield all([
        projectSaga()
    ]);
}
