import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Csscomp/Signup.css'
import FieldInput from '../Signup-field/FieldInput'
import useInput from '../Signup-field/useInput'

function SignUp() {

  const navigate = useNavigate()
  
  const initialValue = {
    username: "",
    password: "",
  }

  const validate = (fieldValue = formValue) => {
    let temp = {}
    if("username" in fieldValue){
      temp.username = formValue.username ? "" : "Enter Your User Name"
    }
    if("password" in fieldValue){
      temp.password = formValue.password ? "" : "Enter Your Password"
    }
    setError({...temp})
    if(fieldValue == formValue){
      return Object.values(temp).every((e) => e == "")
    }
  } 

  const {formValue, setFormValue, handleChange, error, setError} = useInput(initialValue,true,validate)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validate()){
      console.log(formValue)
    }
  }

  return (
    <div className="component">
      <h1>SIGN UP</h1>
      <form className="formcomponent">
        
        <FieldInput 
        className="inputcomponent"
        placeholder="User Name"
        name="username"
        value={formValue.value}
        onChange={handleChange}
        />
        <p>{error.username}</p>
        <FieldInput 
        className="inputcomponent"
        placeholder="Password"
        name="password"
        value={formValue.value}
        onChange={handleChange}
        />
        <p>{error.password}</p>
        <div className="buttncont">
        <button className="btncomponent" onClick={() => navigate('/')}>Home</button>
          <button className="btncomponent" type = "submit" onSubmit={handleSubmit}>Sign Up</button>
          
        </div>
      </form>
      <u><a className="hypercomponent" onClick={() => navigate('/Forget')}>Forget Password</a></u>
    </div>
  )
}

export default SignUp