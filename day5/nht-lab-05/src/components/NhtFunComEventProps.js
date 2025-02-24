import React from 'react'

export default function NhtFunComEventProps(props) {
    const  nhtHanldeButtonClick1 =()=>{
        alert("Dữ liệu từ props:" + props.nhtRenderName);
        console.log("Xin chào:" ,props.nhtRenderName);
    }
    const nhtHanldeButtonClick2 = (param)=>{
        //lấy dữ liệu từ props 
        alert("Dữ liệu từ props (Button 2 click):" + props.nhtRenderName);
        console.log('========================');
        console.log("Hi:",param);
        console.log('========================'); 
    }
  return (
    <div className="alert alert-info">
        <button className='btn btn-primary mx-1'
        onClick={nhtHanldeButtonClick1}>Button1 </button>

        <button className='btn btn-success mx-1'
        onClick={()=>nhtHanldeButtonClick2("Button2")}>Button2 </button>
    </div>
  )
}
