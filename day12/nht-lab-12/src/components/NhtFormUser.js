import React, { useState } from 'react'



export default function NhtFormUser({onNhtAddNew}) {
    const [id, setNhtId] = useState('')
    const [nhtFullName, setNhtFullName] = useState('')
    const [nhtUserName, setNhtUserName] = useState('')
    const [nhtPass, setNhtPass] = useState('')


     const nhtHandleSubmit = (ev) =>{
        ev.preventDefault()
        console.log(id,nhtFullName,nhtUserName,nhtPass);
        
        onNhtAddNew({id,nhtFullName,nhtUserName,nhtPass})
    }
  return (
    <div>
        <form>
            <p>Mã Sinh Viên:
                <input type='text' name='id' value={id} onChange={(ev)=>setNhtId(ev.target.value)}/>
            </p>
            <p>Họ Và Tên:
                <input type='text'  name='nhtFullName' value={nhtFullName} onChange={(ev)=>setNhtFullName(ev.target.value)}  />
            </p>
            <p>Tài Khoản:
                <input type='text'  name='nhtUserName' value={nhtUserName} onChange={(ev)=>setNhtUserName(ev.target.value)} />
            </p>
            <p>Mật Khẩu:
                <input type='password'   name='nhtPass' value={nhtPass}  onChange={(ev)=>setNhtPass(ev.target.value)} />
            </p>

            <p>
                <button name='nhtSave' onClick={nhtHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}