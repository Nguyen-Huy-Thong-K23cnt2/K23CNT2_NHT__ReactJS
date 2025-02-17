import React from 'react'

export default function NhtJsxExpression() {
    //biến
    const name = "Nguyễn Huy Thông";
    //Biến đối tượng
    const user = {
        firstName:"Thông",
        lastName:"Nguyễn"
    }
    //hàm
    const fullName=(user)=>{
        return user.firstName + ' ' +user.lastName;
    }
    const element =(
        <div>
            {/*Biểu thức jsx */}
            <h2>{fullName(user)}</h2>
            <hr/>
            <h3>Welcome to,</h3>
        </div>
    );

    //hàm 
    const sayWelcome = (name)=>{
        if(name){
            return <h3> Welcome to {name}</h3>
        }else{
            return <h3>Welcome to Fit-NTU - K23Cnt2</h3>
        }
    }
  return (
    <div>
        <h1> Nht - Jsx Expression</h1>
        {/* Sử dụng biến element */}
        {element}

        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome(name)}
    </div>
  )
}
