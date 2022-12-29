import React from 'react'
import "./Input.css"

function Input({placeholder, value, onChange, style,className}:React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
        <input
         className={`input ${className}`}
         type={"text"}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         style={style}
        />
    </>
  )
}

export default Input