import {get, post} from './http';
import {addParams, buildQuery} from '../util/url';
import {routes} from '../constants/apiRoutes';

export const getProjects = terms => get(`${routes.projects}${buildQuery({terms})}`);

export const getProject = id => get(addParams(routes.project, {id}));

export const saveOrUpdateProject = project => post(routes.projects, {project});
