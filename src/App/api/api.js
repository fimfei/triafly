/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";
//
// Нижний уровень работы с api-сервисом
// Только на этом уровне идёт работа с AXIOS
//
import {CONFIG_API} from '.';
export const JSON_HEADERS = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Content-Type': 'application/json',
};

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

class Api {
    fetch(options) {
        return axios
            .request({
                ...options,
                baseURL: CONFIG_API.baseURL,
                headers: {...JSON_HEADERS, ...options.headers},
            })
    }

    get({...props}) {
        const {url = '', headers = {}, ...options} = props;
        return this.fetch({url, method: 'GET', headers, ...options});
    }

    post({url = '', body = {}, form, headers = {}}) {
        return this.fetch({url, method: 'POST',
                           data: form ? form : JSON.stringify(body),
                           headers});
    }

    put({url = '', body = {}, headers = {}}) {
        return this.fetch({url, method: 'PUT', data: JSON.stringify(body), headers});
    }

    delete({url = '', body = {}, headers = {}}) {
        return this.fetch({url, method: 'DELETE', data: JSON.stringify(body), headers});
    }

    toStr(body) {
        let restBody = '';

        for(let key in body) {
            restBody += `${key}=${body[key]}&`;
        }
        return restBody.substring(0, restBody.length - 1);
    }
}

export default new Api();