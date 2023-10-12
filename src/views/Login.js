import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../config/firebase"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const signin = () => {
        login(email, password)
  }


    return <div className="signupContainer">
        <div>
            <h1 style={{textAlign: 'center'}}>SIGN UP</h1>
            <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
            <br /> <br />
            <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
            <br /> <br />
            <button onClick={signin} className="btn">Sign Up</button>
            <center>
            <p>Already have an account...?
            <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => navigate('/')} >Click Here</span>
            </p>
            </center>
        </div>
    </div>
}

export default Login