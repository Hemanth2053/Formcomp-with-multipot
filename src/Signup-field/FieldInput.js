import React from 'react'

function FieldInput({className,placeholder, name, value, onChange, errormessage}) {
  return (
    <div>
        <input
        className={className}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        // errormessage={errormessage}
        ></input>
        <p style={{color: "red"}}>{errormessage}</p>
    </div>
  )
}

export default FieldInput