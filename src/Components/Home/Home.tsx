import React, { useEffect, useState } from 'react'
import Input from '../Input/Input'
import "./Home.css"
import { generateRegex } from '../../Utils/generateRegex'

function Home() {
  const [inputdata, Setinputdata] = useState({
    string:"",
    checkString:false,
    checkNum:false,
    checkSymb:false,
    checkSpace:false,
    caseSensitive:false,
  })

  const [regex,Setregex]=useState("")
  const [result,Setresult]=useState("")

  const checkFunc=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, checked}=e.target
    Setinputdata(prev=>({...prev,[name]:checked}))
  }

  const handleClick=()=>{
    generateRegex(inputdata,Setregex,Setresult)
  }

  useEffect(()=>{
    Setregex("")
  },[inputdata])

  return (
    <div style={{ "textAlign": "center" }} className="main">
      <div className='heading'>/ [ Regaxy ] /</div>
      <div style={{ "marginTop": "40px", "fontSize": "30px" }}>Generate your regex pattern</div>
      <div className='line' />
      <div style={{"display":"flex","flexDirection":"column","gap":"15px","justifyContent":"center","padding":"10px"}}>
        <div>
          <Input className='inputstring' style={{"fontSize": "20px" }} value={inputdata.string} onChange={e => Setinputdata(prev=>({...prev,string:e.target.value}))} placeholder={"Enter your String"} />
        </div>
    
        <div className='checkboxes'>
          <div>
            <input name='checkString' onChange={checkFunc} type={"checkbox"} />
            String
          </div>
          <div>
            <input name="checkNum" onChange={checkFunc} type={"checkbox"} />
            Numbers
          </div>
          <div>
            <input name="checkSymb" onChange={checkFunc} type={"checkbox"} />
            Special Characters
          </div>
          <div>
            <input name="checkSpace" onChange={checkFunc} type={"checkbox"} />
            Space
          </div>
          <div>
            <input name="caseSensitive" onChange={checkFunc} type={"checkbox"} />
            Case Sensitive
          </div>
        </div>
        <div>
          <button onClick={handleClick} className='btn'>Generate</button>
        </div>
        {!!regex&&<div className='result'>
          <div>
            Regex Pattern
          </div>
          <div className='regex'>{regex}</div>
          <div style={{"marginTop":"10px"}}>
            Result
          </div>
          <div className='regex'>{result?result:"No Match Found"}</div>
        </div>}
      </div>
    </div>
  )
}

export default Home