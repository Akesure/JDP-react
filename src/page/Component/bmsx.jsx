import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';

import CommonLists from './widget/commonLists';

class Bmsx extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      departments: [],
      configs: {
        type: 'memberList',
        list: []
      }
    }
  }

  componentWillMount() {
    let id = this.props.routeParams.id;
    let query = this.props.location.query;
    var a = ['全部', '大数据', '技术中心', ' 架构部', ' 商城技术', ' 基础支撑中心'];
    // for(var i = 0; i <=3; i++) {
      let name = a[id[0]] + '部门';
      this.setState(Object.assign(this.state.configs, {
        list: [{
          text: name,
          to: '/xmsx?id=' + id[0] + '&centerName='+ query.centerName +'&text='+ name +'&choiceId=' + id[1]
        }],
        name: name
      }))
    // }
  }

  render() {
    return (
      <div className="main">
        <div className="nav-list">
          <CommonLists configs={this.state.configs}></CommonLists>
        </div>
      </div>
    )
  }
}

export default Bmsx;
