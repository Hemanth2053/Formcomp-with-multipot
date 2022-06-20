import React from 'react'
import '../Csscomp/Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate(null)


  return (
    <div  className="maincomp">
        <div className="firstcont">
            <p>Hey There... If you need to access this page, You should Sign up your account.<br/> If you have an account, Kindly click this button... </p>
            <button className="signupbtn" onClick={() => navigate('/SignUp')}>Sign Up</button>
        </div>
        <div className="secondcont">
            <p>If you don't have an account, Create your own account from clicking this button and then signup... </p>
            <button className="btnSignin" onClick={() => navigate('/SignIn')}>Sign In</button>
        </div>
    </div>
  )
}

export default Home