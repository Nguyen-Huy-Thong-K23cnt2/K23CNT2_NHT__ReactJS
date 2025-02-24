/* eslint-disable no-lone-blocks */
import React from 'react'

export default function NhtFunEvent1() {
    //hàm sử lý sự kiện
    {/*const nhtEventButton1Click = () => {
        alert("Button 1 - clicked"); 
    }; */}
    const nhtEventButton2Click = () => {
        alert("Button 2 - clicked");
    };
    const nhtEventButton3Click = (name) => {
        alert("Name" + name)
    }
  return (
        <div className="alert alert-info">
          {/*  <button className="btn btn-primary" onClick={nhtEventButton1Click()}>
                Button1
            </button> */}
            <button className="btn btn-success mx-1" onClick={nhtEventButton2Click}>
                Button2
            </button>
          {/*  <button className="btn btn-success" onClick={()=>nhtEventButton3Click(" Huy Thông")}>
                Button3
            </button> */}
            <button className="btn btn-success mx-1" onClick={nhtEventButton3Click(" Nguyễn Huy Thông")}>
                Button4
            </button>
           
        </div>
  )
}
