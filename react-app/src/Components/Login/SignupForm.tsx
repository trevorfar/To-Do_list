import React from 'react';
import './LoginForm.css'

const SignupForm: React.FC = () => {
    return(
    <>

<div className="signin">
                <div className="content">
                    <h2>Create Account</h2>

                    <form className="form">

                        <div className="inputBox">
                        <input type="text" required/> <label>Create Username</label> 
                        </div>

                        <div className="inputBox">
                        <input type="password" required/> <label>Password</label> 
                        </div>

                        <div className="links"> <a href="#">Forgot Password</a> <a href="#">Signup</a>
                        </div>

                        <div className="inputBox">
                        <input type="submit" value="Login" />
                        

                        </div>
                        </form>
                    </div>
                </div>
    </>
    )
}

export default SignupForm 