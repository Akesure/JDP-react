import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';

import CommonLists from './widget/commonLists';

class Xmlx extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      configs: {
        type: 'listNav',
        list: [
          {
            to: '/xmlx/detail/lxfx',
            text: '项目类型分析'
          },
          {
            to: '/xmlx/detail/xmfxlx',
            text: '项目风险分析'
          }
        ]
      }
    }
  }

  renderCommonLists() {
    return (
      <div className="main">
        <div className="nav-list">
          <CommonLists configs={this.state.configs}></CommonLists>
        </div>
      </div>
    )
  }

  render() {
    return this.renderCommonLists();
  }
}

export default Xmlx;
