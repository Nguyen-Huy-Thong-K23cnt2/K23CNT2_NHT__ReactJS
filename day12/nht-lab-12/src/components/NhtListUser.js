import React from 'react'

export default function NhtListUser({ renderNhtUsers }) {

    const nhtElements = renderNhtUsers.map((nhtItem, index) => {
        return(
        <>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{nhtItem.id}</td>
                <td>{nhtItem.nhtFullName}</td>
                <td>{nhtItem.nhtUserName}</td>
                <td>{nhtItem.nhtPass}</td>
            </tr>
        </>)
    })
    return (
        <div>
            <h2>Danh sách tài Khoản</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>FullName</th>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {nhtElements}
                </tbody>
            </table>
        </div>
    )
}