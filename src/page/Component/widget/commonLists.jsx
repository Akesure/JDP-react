import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';

import '../../Style/sass/list';

const CommonLists = (props) => {
  let {list, type} = props.configs;
  return <ul>
    {
      list.length > 0?list.map((item, index) => {
        return <li key={index} className="nav-list-item">
          {item.to?<Link to={`${item.to}`}>
            {type=='main'?<em className={`${item.iconClass}`}></em>:null}
            <span>{item.text}</span>
            {type=='listNav'?<em className="icon iconn-5 icon-info"></em>:null}
          </Link>:<span className={type == 'memberList'?'navListItemTitle':null}>
            {type=='memberList'?<strong>{item.name}<span>{item.text}</span></strong>:null}
          </span>}
        </li>
      }):null
    }
  </ul>
}

export default CommonLists;
