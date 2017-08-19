import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';

import CommonLists from './widget/commonLists';

class Sxjg extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      configs: {
        type: 'listNav',
        list: []
      }
    }
  }

  renderCommonLists() {
    return <CommonLists configs={this.state.configs}></CommonLists>
  }

  componentWillMount() {
    this.setState({
      configs: this.configs.list.map((v, i) => {
        return {
          text: v.projectName,
          to: '/xmsx/xmxq?projectId=' + v.projectId
        }
      })
    })
  }

  render() {
    return this.renderCommonLists();
  }
}

export default Sxjg;
