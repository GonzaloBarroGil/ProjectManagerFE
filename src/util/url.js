const buildQuery = searchParams => {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
        if (value) {
            params.set(key, value);
        }
    })
    return params.toString() ? `?${params.toString()}` : '';
};

const addParams = (route, params = {}) => {
    let routeWithParams = route;
    Object.keys(params).forEach(key => {
        routeWithParams = routeWithParams.replace(`:${key}`, params[key]);
    });
    return routeWithParams;
};

export {
    addParams,
    buildQuery
};
