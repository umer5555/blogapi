import React, { useState } from 'react'

function Form() {

    const [name,setName]=useState([""]);
    const [email,setEmail]=useState([""]);
    const [mobile,setMobile]=useState([""]);

    function saveUser(){
        console.log(name,email,mobile);
        let data ={name,email,mobile}
        fetch('http://localhost:3031/shop',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
                },
            body:JSON.stringify(data)
        }).then ((result)=>{
            console.log("result",result)
        })


    }

  return (
    <div className='App'>

        <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}} /> <br/><br/><br/>
        <input type="text" value={email}  onChange={(e)=>{setEmail(e.target.value)}} /> <br/><br/><br/>
        <input type="text"  value={mobile} onChange={(e)=>setMobile(e.target.value)} /> <br/><br/><br/>
        <button onClick={saveUser} >Submit</button>

    </div>
  )
}

export default Form