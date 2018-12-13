/* 接口域名配置 */

const host = {
  development: 'http://devapi.huixie.com',
  dev: '',
  test: 'http://testapi.fenxianglife.com',
  prod: 'https://api.huixie.com',
  pre: 'https://preapi.huixie.com',
};

const apiHost = host[process.env.BUILD_ENV] || '';

const apiNjia = `${apiHost}/njia`;

module.exports = { host, apiNjia };
