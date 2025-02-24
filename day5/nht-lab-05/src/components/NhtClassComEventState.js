import React, { Component } from 'react'

class NhtClassComEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            tvcFullName:"Nguyễn Huy Thông",
            nhtAge: 45,
        }
    }
     //hàm xử lý sk
     nhtEventHandleClick = ()=>{
        //lấy dữ liệu trong state
        alert("FullName: " +this.state.tvcFullName + "\n Age:" + this.state.nhtAge);
     }
    render() {
    return (
      <div className='alert alert-danger'>
         <button className='btn btn-primary' onClick={this.nhtEventHandleClick}>Button1 - Dữ liệu trong state</button>
      </div>
    )
  }
}
export default NhtClassComEventState;