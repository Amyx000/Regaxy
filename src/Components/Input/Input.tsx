import React from 'react'
import "./Input.css"

function Input({placeholder, value, onChange}:React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
        <input
         className="input"
         type={"text"}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
        />
    </>
  )
}

export default Input