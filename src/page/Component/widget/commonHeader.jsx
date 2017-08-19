import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';

import '../../Style/sass/Header';

const CommonHeader = (props) => {
  // let { lists } = props.configs;

  let _click = () => window.history.back();

  return <div className="header">
    <a href="javascript:void(0)">
      <em className="header-backicon iconn-1" onClick={_click}></em>
    </a>
    <span className="header-title">

    </span>
  </div>
}

export default CommonHeader;
