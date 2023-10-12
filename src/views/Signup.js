import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../config/firebase"

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullName] = useState('')
    const [age, setAge] = useState('')
    const navigate = useNavigate()

    const signup = () => {
        register(email, password, fullname, age)
  }


    return <div className="signupContainer">
        <div>
            <h1 style={{textAlign: 'center', color: 'grey'}}>SIGN UP</h1>
            <input style={{ padding: 7, marginLeft: 5, width: 190, marginBottom: 10}} onClick={e => setFullName(e.target.value)} type="text" placeholder="Enter your fullname"/>
            <input style={{ padding: 7, marginLeft: 20, width: 190, marginBottom: 10}} onClick={e => setAge(e.target.avlue)} type="number" placeholder="Enter your age"/>
            <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
            <br /> <br />
            <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
            <br /> <br />
            <button onClick={signup} className="btn">Sign Up</button>
            <center>
            <p>Already have an account...?
            <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => navigate('/login')} > Click Here </span>
            </p>
            </center>
        </div>
    </div>
}

export default Signup