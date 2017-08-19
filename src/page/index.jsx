import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import ReactDOM, {render} from 'react-dom';
// import {Provider} from 'react-redux';
import route from './Router/Router'; //路由配置
import CommonHeader from './Component/widget/commonHeader.jsx'; //公用头部
// import store from './Redux/Store/Store';
// import './Config/Config.js';//引入默认配置

import './Style/sass/public';

// store.subscribe(() => { //监听state变化
    //console.log(store.getState())
// });

render(
    <section>
      <CommonHeader />
      {route}
    </section>,
    document.getElementById('container')
);
