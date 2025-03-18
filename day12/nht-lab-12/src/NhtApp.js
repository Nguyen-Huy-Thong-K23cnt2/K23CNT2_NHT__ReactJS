import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NhtNavNar from './components/NhtNavNar'
import NhtHome from './components/NhtHome'
import NhtAbout from './components/NhtAbout'
import NhtContact from './components/NhtContact'
import NhtListUser from './components/NhtListUser'
import NhtFormUser from './components/NhtFormUser'
export default function NhtApp() {

  const listUsers = [
    {id:"SV001", nhtFullName:"Nguyễn Huy Thông", nhtUserName:"Huy Thông", nhtPass:"hthong"},
    {id:"SV002", nhtFullName:"Phạm Tuấn Anh", nhtUserName:"TAnh", nhtPass:"TAnh"},
    {id:"SV003", nhtFullName:"Phạm Văn Vũ ", nhtUserName:"Văn Vũ", nhtPass:"VVu"},
  ]

  const [nhtUsers, setNhtUsers] = useState(listUsers)

  // Hàm sử lý sự kiẹn thêm mới
  const nhtHandleAdd = (nhtParam) => {
    console.log("nhtHandleAdd:", nhtParam);
    
    setNhtUsers(prev =>{
       return[
      ...prev,
      nhtParam
    ]
    })
  }
  return (
    <div className='container border my-3'>
      <h1>React Route Dom - Demo - [Nguyễn Huy Thông - K23CNT2]</h1>
      <hr />
    <Router>
      <NhtNavNar />
      <Routes>
        <Route path='/' element={<NhtHome/>} />
        <Route path='/about' element={<NhtAbout/>} />
        <Route path='/contact' element={<NhtContact/>} />
        <Route path='/list-user' element={<NhtListUser renderNhtUsers={nhtUsers}/>} />
        <Route path='/create-user' element={<NhtFormUser onNhtAddNew={nhtHandleAdd}/>} />
      </Routes>
    </Router>
    </div>
  )
}