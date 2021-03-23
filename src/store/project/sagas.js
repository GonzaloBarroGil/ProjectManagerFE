import {
    call, put, takeLatest
} from 'redux-saga/effects';

import * as actions from './actions';
import {
    GET_PROJECTS_REQUEST,
    GET_PROJECT_REQUEST,
    SAVE_PROJECT_REQUEST
} from './types';
import {getProjects, getProject, saveOrUpdateProject} from '../../services/project';

export function* fetchProjects({terms}) {
    try {
        const projects = yield call(getProjects, terms);
        yield put(actions.getProjectsSuccess(projects));
    } catch (error) {
        yield put(actions.getProjectsError(error));
    }
}

export function* findProject({id}) {
    try {
        const project = yield call(getProject, id);
        yield put(actions.getProjectSuccess(project));
    } catch (error) {
        yield put(actions.getProjectError(error));
    }
}

export function* saveProject({project}) {
    try {
        yield call(saveOrUpdateProject, project);
        yield put(actions.saveProjectSuccess());
    } catch (error) {
        yield put(actions.saveProjectError(error));
    }
}

export function* projectSaga() {
    yield takeLatest(GET_PROJECTS_REQUEST, fetchProjects);
    yield takeLatest(GET_PROJECT_REQUEST, findProject);
    yield takeLatest(SAVE_PROJECT_REQUEST, saveProject);
}
