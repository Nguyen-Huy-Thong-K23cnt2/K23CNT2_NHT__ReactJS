import React, { Component } from 'react'

export default class NhtClassCompEventProps extends Component {
    //hàm xử lý sk
    nhtEventHandClick1 =()=>{
    alert("hello..." + this.props.nhtRenderTitle);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.nhtEventHandClick1}>Button1</button>
      </div>
    )
  }
}
