import React from 'react'
import { useState } from 'react'
import '../Csscomp/Forget.css'
import { useNavigate } from 'react-router-dom'

function Forget() {

  const navigate = useNavigate()

  const [steps, setSteps] = useState(1)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [reenter, setReenter] = useState("")

  const handleStepsInc = () => {
    if(steps >=3 ) {
      setSteps(3)
    }else{
      setSteps(steps + 1)
    }
  }

  const handleStepsDec = () => {
    if(steps <=1 ){
      setSteps(1)
    }else{
      setSteps(steps - 1)
    }
  }

  return (
    <div className="forgetcomp">
      <h3>Step {steps}  of 3</h3>
      {steps === 1 ? <input
      className="stepscomp"
      placeholder="Email ID"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      /> : null}
    
      {steps === 2 ? <input
      className="stepscomp"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      /> : null}
      
      {steps === 3 ? <input
      className="stepscomp"
      placeholder="Re-Enter Password"
      value={reenter}
      onChange={(e) => setReenter(e.target.value)}
      /> : null}

      <div className="sidecomp">
        <button className="butncomp" onClick={() => handleStepsDec()}>Back</button>
        <button className="butncomp" onClick={() => handleStepsInc()}>Next</button>
        {steps === 3 ? <button className="butncomp" onClick={() => navigate('/SignUp')}>Sign Up</button> : null}
      </div>
    </div>
  )
}

export default Forget