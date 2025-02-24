import React, { Component } from 'react'

export default class NhtClassCompEvent1 extends Component {
    //Hàm xử lý sự kiện 
    nhtEventHandleClick1 = () =>{
        alert("Button1 clicked");
    }
    nhtEventHandleClick2 = (name) =>{
        alert("Button2 clicked; name=" + name );
    }
  render() {
    return (
      <div className="alert alert-danger">
        <button className='btn btn-primary mx-1' onClick={this.nhtEventHandleClick1}> button1 </button>
        <button className='btn btn-success mx-1' 
            onClick={()=>this.nhtEventHandleClick2("Huy Thông")}> button2 </button>
      </div>
    );
  }
}
