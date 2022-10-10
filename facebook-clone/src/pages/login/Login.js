import './login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginleft">
            <h3 className="loginlogo">DAP Social</h3>
            <span className="loginDesc">
                Connect with friends and the world around you on DAP Social.
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input  placeholder='Email' className='loginInputs' />
                <input  placeholder='Password' className='loginInputs' />
                <button className="loginButton">Log in</button>
                <span className='loginForgot'>Forgot Password</span>
                <button className="loginRegisterButton">Create a New Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
