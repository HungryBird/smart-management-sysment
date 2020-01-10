import axios from 'axios'
import { config, baseURL } from './config'
import { getExpiresStorage, isEmpty, getLowerCase } from '@/utils/util'

export const http = (url, method, options, headers = {}) => {
    const token = getExpiresStorage('token');
    const token_type = getExpiresStorage('token_type')
    if (!isEmpty(token)) {
        config.auth = `Bearer ${token}`;
    }
    config.url = baseURL + url;
    config.method = getLowerCase(method) || 'get';
    if(!isEmpty(headers)) {
        for(const key in headers) {
            if(headers.hasOwnProperty(key)) {
                config.headers[key] = headers[key];
            }
        }
    }
    if (config.method === 'get') {
        config.params = options;
    }
    else if (config.method === 'post') {
        config.data = JSON.stringify(options);
        config.params = {};
    }
    console.log('config: ', config)
    return axios(config);
}