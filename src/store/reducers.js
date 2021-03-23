import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import {getProject, getProjects, saveProject} from '../store/project/reducer';

export const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    getProjects,
    getProject,
    saveProject
});
