
// @flow

import $axios from '@/utils/axios';

const apis = {
  goodsDetail: $axios.get('/goods/detail', true), // 商品详情
  taoCategory: $axios.get('/index/category'), // 获取商品类目
};

export default apis;
