import {
    GET_PROJECTS_REQUEST,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_ERROR,
    GET_PROJECT_REQUEST,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_ERROR,
    SAVE_PROJECT_REQUEST,
    SAVE_PROJECT_SUCCESS,
    SAVE_PROJECT_ERROR
} from './types';

export const getProjects = (state = {
    projects: [], project: undefined, people: [], loading: false, requested: false
}, action) => {
    switch (action.type) {
        case GET_PROJECTS_REQUEST:
            return {...state, projects: [], project: undefined, people: [], loading: true, requested: true};
        case GET_PROJECTS_SUCCESS: {
            return {...state, projects: action.projects, project: undefined, people: action.people, loading: false, requested: true};
        }
        case GET_PROJECTS_ERROR:
            return {...state, projects: [], project: undefined, loading: false, requested: true, error: action.error};
        default:
            return state;
    }
};

export const getProject = (state = {
    projects: [], project: undefined, loading: false, requested: false
}, action) => {
    switch (action.type) {
        case GET_PROJECT_REQUEST:
            return {...state, project: undefined, loading: true, requested: true};
        case GET_PROJECT_SUCCESS:
            return {...state, project: action.project, loading: false, requested: true};
        case GET_PROJECT_ERROR:
            return {...state, project: undefined, loading: false, requested: true, error: action.error};
        default:
            return state;
    }
};

export const saveProject = (state = {
    projects: [], project: undefined, loading: false, requested: false
}, action) => {
    switch (action.type) {
        case SAVE_PROJECT_REQUEST:
            return {...state, projects: [], project: undefined, loading: true, requested: true};
        case SAVE_PROJECT_SUCCESS:
            return {...state, projects: [], project: undefined, loading: false, requested: true};
        case SAVE_PROJECT_ERROR:
            return {...state, projects: [], project: undefined, loading: false, requested: true, error: action.error};
        default:
            return state;
    }
};
