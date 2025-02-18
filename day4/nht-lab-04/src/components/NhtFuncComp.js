import React from 'react'

export default function NhtFuncComp(props) {
  return (
    <div >
        <h2> Demo: function component props</h2>
        <p>Lấy dữ liệu từ props để hiển thị</p>
        <p>Name: {props.name}</p>
        <p>Addess: {props.address}</p>
        <p>Comp: {props.company}</p>
        <p>Note: {props.note}</p>

    </div>
  )
}
