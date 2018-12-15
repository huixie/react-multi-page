import * as React from 'react';
import { Icon } from 'antd-mobile';
import ReactDOM from '@/App';

export default class About extends React.Component {
  render() {
    return (
      <div>
        你好
        <i className="am-icon am-icon-delete" />
        <Icon type="loading" />
      </div>
    );
  }
}

ReactDOM.render(About);
