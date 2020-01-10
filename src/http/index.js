import axios from 'axios'
import { config, baseURL } from './config'

export const http = (url. method, options, headers = {}) => {
    const token = null;
    config.baseURL = baseURL + url;
    config.method = method;
    config.auth = '';
    return axios(config).then(() => {

    })
}