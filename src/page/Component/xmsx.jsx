import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';

import CommonLists from './widget/commonLists';

class Xmsx extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showFilter: true,
      showSearch: false,
      searchText: '',
      filterData: '',
      configs: {
        type: 'listNav',
        list: [
          {
            to: '/xmsx/option/1',
            text: '选择中心/部门'
          },
          {
            to: '/xmsx/option/2',
            text: '选择类型'
          },
          {
            to: '/xmsx/option/3',
            text: '选择阶段'
          },
          {
            to: '/xmsx/option/4',
            text: '选择风险类型'
          },
          {
            to: '/xmsx/option/5',
            text: '选择状态类型'
          },
        ]
      },
      xmsxData: {
        filterTypeList: []
      },
      visited: false,
      filter: {
        centerName: '',  // 中心 id
        centerId: -1,
        departId: -1,    // 部门 id
        departName: '',
        filterCenter: false,
        typeId: -1,  // 类型 id
        typeName: '',
        filterType: false,
        stateId: -1,  // 阶段 id
        stateName: '',
        filterState: false,
        riskId: -1,  // 风险 id
        riskName: '',
        filterRisk: false,
        projectId: -1,  // 状态 id
        projectName: '',
        filterProject: false
      }
    }
  }

  _tab(n) {
    if(n) {
      this.setState({
        showFilter: true,
        showSearch: false,
      });
    } else {
      this.setState({
        showFilter: false,
        showSearch: true,
      });
    }
  }

  _toSearch() {
    if(this.state.searchText) {
      this.props.router.push({
        pathname: '/xmsx/xmxq'
      })
    }
  }

  _toFilter() {
    if(this.state.filterData) {
      this.props.router.push({
        pathname: '/xmsx/sxjg'
      })
    }
  }

  _toChange(e) {
    this.setState({
      searchText: e.target.value
    })
  }

  renderCommonLists() {
    // console.log(this.state)
    return (
      <div className="main">
        <div className="nav-list">
          <div className="search-head">
            <span onClick={() => this._tab(1)} className={this.state.showFilter?"on filter":"filter"}>筛选</span>
            <span onClick={() => this._tab(0)} className={this.state.showSearch?"on search":"search"}>搜索</span>
          </div>
          <div className="clips"></div>
          <div className="content-box">
          {
            this.state.showFilter?<div className="switch-item">
              <CommonLists configs={this.state.configs}></CommonLists>
              <div className="btn-box">
                <button className={this.state.filterData?"on filterBtn":"filterBtn"} onClick={() => this._toFilter()}>筛选</button>
              </div>
            </div>:null
          }
          {
            this.state.showSearch?<div className="switch-item">
              <ul>
                <li className="search-li">
                  <em className="icon iconn-4"></em>
                  <input type="text" placeholder="请输入项目名称" onChange={(e) => this._toChange(e)} value={this.state.searchText}/>
                </li>
              </ul>
              <div className="btn-box">
                <button className={this.state.searchText?"on searchBtn":"searchBtn"} onClick={() => this._toSearch()}>搜索</button>
              </div>
            </div>:null
          }
          </div>
        </div>
      </div>
    )
  }

  render() {
    return this.renderCommonLists();
  }
}

export default Xmsx;
