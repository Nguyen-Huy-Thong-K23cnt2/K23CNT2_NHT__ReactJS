import React, { Component } from 'react';
import NhtLoginControl from './components/NhtLoginControl';
import NhtRenderList from './components/NhtRenderList';
import NhtRenderListStudent from './components/NhtRenderListStudent'; // Kiểm tra lại tên file

class NhtApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
        <h1 className='text-center'>Nguyễn Huy Thông - Render condition, List key</h1>
        <hr />
        <NhtLoginControl />
        <NhtRenderList />
        <NhtRenderListStudent />
      </div>
    );
  }
}

export default NhtApp;
