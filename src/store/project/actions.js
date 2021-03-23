import * as types from './types';

export const getProjectsRequest = terms => ({type: types.GET_PROJECTS_REQUEST, terms});
export const getProjectsSuccess = ({projects, people}) => ({type: types.GET_PROJECTS_SUCCESS, projects, people});
export const getProjectsError = error => ({type: types.GET_PROJECTS_ERROR, error});

export const getProjectRequest = id => ({type: types.GET_PROJECT_REQUEST, id});
export const getProjectSuccess = project => ({type: types.GET_PROJECT_SUCCESS, project});
export const getProjectError = error => ({type: types.GET_PROJECT_ERROR, error});

export const saveProjectRequest = project => ({type: types.SAVE_PROJECT_REQUEST, project});
export const saveProjectSuccess = () => ({type: types.SAVE_PROJECT_SUCCESS});
export const saveProjectError = error => ({type: types.SAVE_PROJECT_ERROR, error});

export const setNotification = ({message, notificationType}) => ({
    type: types.SET_NOTIFICATION, message, notificationType
});
