import React from 'react'
import { BrowserRouter as NhtRouter, Route, Routes } from 'react-router-dom'
import NhtNavBar from './components/NhtNavBar'
import NhtHome from './components/NhtHome'
import NhtEditUser from './components/NhtEditUser'
import NhtCreateUser from './components/NhtCreateUser'
import NhtListUser from './components/NhtListUser'
export default function NhtApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>K23CNT2 - Nguyễn Huy Thông - 2310900102</h1>
      <hr/>
      <NhtRouter>
          <NhtNavBar />
          <hr/>
          <Routes>
              <Route path='/' element={<NhtHome/>} />
              <Route path='/nht-list-user' element={<NhtListUser/>} />
              <Route path='/nht-create-user' element={<NhtCreateUser/>} />
              <Route path='/nht-edit-user/:id' element={<NhtEditUser/>} />
          </Routes>
      </NhtRouter>
    </div>
  )
}