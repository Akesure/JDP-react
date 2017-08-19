import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';

import CommonLists from './widget/commonLists';

class Gzl extends Component {
  constructor() {
    super();

    this.state = {
      configs: {
        type: 'listNav',
        list: [
          {
            to: '/gzl/detail/1',
            text: '项目阶段人天分析'
          },
          {
            to: '/gzl/detail/2',
            text: '项目阶段人数分析'
          },
          {
            to: '/gzl/detail/3',
            text: '项目阶段任务数分析'
          }
        ]
      }
    }
  }

  render() {
    return(
      <div className="main">
        <div className="nav-list">
          <CommonLists configs={this.state.configs}></CommonLists>
        </div>
      </div>
    )
  }
}

export default Gzl;
