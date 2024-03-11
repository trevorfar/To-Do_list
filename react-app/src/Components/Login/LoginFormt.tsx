import React, { useState } from 'react'
import './LoginForm.css'
import axios from 'axios'


const LoginForm: React.FC = () => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')



    const login = async (event: React.FormEvent) => {
        event.preventDefault();
        try{
            console.log(user);
            console.log(pass);
            const response = await axios.post('http://localhost:3300/login', { Username: user, Password: pass})
            console.log("Successful login")
            console.log(response.data.token);
            console.log(response.data.user_id);
            localStorage.setItem('token', response.data.token);
            // localStorage.setItem('user_id', response.data.user_id);
            return true;
        }
        catch(error){   
            console.error(error);
            return false;
        }
      };

      /*const getProfile = async () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const response = await axios.get('http://your-api-url/profile', {
      headers: { Authorization: token },
    });
    return response.data.user;
  } catch (error) {
    console.error(error);
    return null;
  }
};*/ 

    return (
        <>
            <div className="signin">
                <div className="content">
                    <h2>Sign In</h2>

                    <form className="form" onSubmit={login}>

                        <div className="inputBox">
                        <input type="text" required value={user} onChange={(e)=> setUser(e.target.value)}/> <label>Username</label> 
                        </div>

                        <div className="inputBox">
                        <input type="password" required value = {pass} onChange={(e)=> setPass(e.target.value)}/> <label>Password</label> 
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
    );

};

export default LoginForm