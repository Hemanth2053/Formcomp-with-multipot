import React from 'react'
import '../Csscomp/Signin.css'
import { useNavigate } from 'react-router-dom'

function SignIn() {

  const navigate = useNavigate(null)

  return (
    <div className='maincont'>
        <h1>SIGN IN</h1>
        <form className='formcomp'>
            <input className='formcont' placeholder="Email ID"></input>
            <input className='formcont' placeholder="Enter Your Name"></input>
            <input className='formcont' placeholder="Mobile No"></input>
            <input className='formcont' placeholder="Enter OTP"></input>
            <div className='btncomp'>
              <button className='signinbtn' onClick={() => navigate('/')}>Create</button>
              
            </div>
            {/* <div className="pagecont">
              <p>If Already Have An Account  ? </p>
              <button className='signinbtn' onClick={() => navigate("/Home")}>Sign Up</button>
            </div> */}
        </form>
    </div>
  )
}

export default SignIn