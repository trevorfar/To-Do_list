import LoginForm from '../../Components/Login/LoginForm';
import './Home.css';
import React from 'react'

const Home: React.FC = () =>{

  const testButton =  () => {
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('user_id'));
  }

  const scaryTestButton = () => {
    localStorage.clear();
    console.log("localstorage cleared");
  }
  return (
    <>
    <p>Create new List</p>
    <button onClick={testButton}>Test Local</button>
    <button onClick={scaryTestButton} >Scary Button </button>
    <p>hey</p>
    <LoginForm />
    </>
  )
}


export default Home
