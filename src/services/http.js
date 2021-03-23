require('dotenv').config();

const {REACT_APP_ENDPOINT} = process.env;

export const get = async url => {
    const response = await fetch(`${REACT_APP_ENDPOINT}${url}`, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });
    return response.json();
};

export const post = async (url, body) => {
    const response = await fetch(`${REACT_APP_ENDPOINT}${url}`, {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    });
    if (response.status >= 400) {
        throw new Error();
    }
    return response.json();
};
