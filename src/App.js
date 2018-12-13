// @flow

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import 'babel-polyfill';
import Es6Promise from 'es6-promise';
import * as utils from '@/utils';
import 'antd-mobile/dist/antd-mobile.css';

require('es6-promise').polyfill();

Es6Promise.polyfill();

const Container = WrapConpoment => class extends Component {
  render() {
    const $extend = {
      ...utils,
    };
    return (<WrapConpoment {...this.props} {...$extend} />);
  }
};

const render = component => ReactDOM.render(React.createElement(Container(component)), document.getElementById('root'));
if (module.hot) {
  module.hot.accept();
}
export default { render };
