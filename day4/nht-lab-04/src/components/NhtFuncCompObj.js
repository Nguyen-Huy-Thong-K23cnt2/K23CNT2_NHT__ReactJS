import React from 'react'

export default function NhtFuncCompObj(props) {
  return (
    <div>
        <h2>Props is Project</h2>
        <p><b>Info:</b></p>
        <p>FullName: {props.renderInfo.fullName}</p>
        <p>Age: {props.renderInfo.age}</p>
        <p>FullName: {props.renderInfo.phone}</p>
    </div>
  )
}
