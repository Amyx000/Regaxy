import React, { useState } from 'react'
import Input from '../Input/Input'
import "./Home.css"

function Home() {
  const [string,Setstring]=useState("")
  console.log(string)
  return (
    <div style={{"textAlign":"center"}}>
      <div className='heading'>/ [ Regaxy ] /</div>
      <div style={{"marginTop":"20px"}}>Generate your regex pattern</div>
      <Input value={string} onChange={e=>Setstring(e.target.value)} placeholder={"Enter your String"}/>
    </div>
  )
}

export default Home