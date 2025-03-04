import React from 'react'

export default function NhtRenderList() {
    const nhtList = ["Huy Thông", "ReactJS","Fit-NTU"];

    const nhtElement = nhtList.map(item=>{
        return <li>{item}</li>
    })

  return (
    <div className='alert alert-success'>
        <h2> Danh sách:</h2>
        <ul>
            {
                nhtList.map(item=>{
                    return <li>{item}</li>
                })
            }
        </ul>
        <hr/>
        {nhtElement}
    </div>
  )
}