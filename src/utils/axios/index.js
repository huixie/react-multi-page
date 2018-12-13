// @flow

import axios from 'axios';
import _ from 'lodash';
import { Toast } from 'antd-mobile';

const hostConfig = require('@/api/host');
// import { apiNjia } from '@/api/host';

axios.defaults.baseURL = hostConfig.apiNjia;
// 自定义判断元素类型JS
function toType(obj) {
  return ({
  }).toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}
// 参数过滤函数
function filterNull(o) {
  _.forEach(o, (value, key) => {
    if (value === null) {
      delete o[key];
    }
    if (toType(value) === 'string') {
      o[key] = value.trim();
    } else if (toType(value) === 'object') {
      o[key] = filterNull(value);
    } else if (toType(value) === 'array') {
      o[key] = filterNull(value);
    }
  });
  return o;
}

function apiAxios(method, url:string, params:{}, identity:boolean) {
  // 自定义request headers
  if (params && params.headers) {
    axios.defaults.headers = { ...params.headers, 'Content-Type': 'application/json' };
    delete params.headers;
  }
  if (identity) {
    return false;
  }
  return new Promise((resolve, reject) => {
    if (params) {
      params = filterNull(params);
    }
    axios({
      method,
      url,
      data: method === 'POST' || method === 'PUT' ? JSON.stringify(params) : null,
      params: method === 'GET' || method === 'DELETE' ? params : null,
    }).then((res) => {
      if (res.data.code === 200) {
        resolve(res.data);
      } else {
        res.data.message && Toast.info(res.data.message, 1);
        reject();
      }
    }).catch((err) => {
      if (err) {
        Toast.offline('网络错误', 1);
        reject();
      }
    });
  });
}


// 返回调用接口方式
const $axios = {
  get: (api:String, identity:Boolean) => (params:Object) => apiAxios('GET', api, params, identity),
  getById: (api:String, identity:Boolean) => (params:Object) => apiAxios('GET', `${api}/${params.id}`, params, identity),
  post: (api:String, identity:Boolean) => (params:Object) => apiAxios('POST', api, params, identity),
};

export default $axios;
