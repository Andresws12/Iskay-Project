export const apiPrefix = (url: string): any =>
    process.env.VUE_APP_TODO_ENV_VARIABLE + url;

export const jsonHeaders = {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};
export const htmlHeaders = {
    headers: {
        Accept: 'text/html',
    },
};
