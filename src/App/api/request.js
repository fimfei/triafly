/* eslint-disable import/no-anonymous-default-export */

import {api} from "./";
import UTILS from "../common/utils";

class Request {
    get({...props}) {
        const {url, getParams, success, error, dataConverter} = props;

        return api.get({url: url + UTILS.getParamsToString(getParams)})
            .then(_data => {
                const data = dataConverter ? dataConverter(_data.data) : _data.data;
                if(success) {
                    success(data);
                }
                return data;
            })
            .catch(data => {
                if(error) {
                    error(data.message);
                }
                return data.message;
            });
    }
    post({...props}) {
        return this.post_put_delete({...props, method: 'post'})
    }
    put({...props}) {
        return this.post_put_delete({...props, method: 'put'})
    }
    delete({...props}) {
        return this.post_put_delete({...props, method: 'delete'})
    }
    post_put_delete({...props}) {
        const {url, body, form, headers, success, error, method, dataConverter} = props;

        return api[method]({url, body, form, headers})
            .then(_data => {
                const data = dataConverter ? dataConverter(_data.data) : _data.data;
                if(success) {
                    success(data);
                }
                return {
                    response: _data,
                    data,
                };
            })
            .catch(data => {
                if(error) {
                    error(data);
                }
                const {message} = data;
                return {
                    response: data,
                    message,
                };
            });
   }
}
export default new Request();
