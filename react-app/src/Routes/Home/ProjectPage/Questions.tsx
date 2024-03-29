import React from 'react'
import './Questions.css'
const Questions:React.FC = () => {
  const myArray = [['Question1', 'Question2'], ['test1', 'test2']];
  return (
    <>
    <h1>Project</h1>
    <section className="questions-container">

    <div className="questions">
        <h1>Questions</h1>
      {myArray[0].map((question, index) => (
        <div key={index}>{question}</div>
      ))}
    </div>
    

    <div className="questions-list">
    <h1>Answers</h1>
    {myArray[1].map((answer, index) => (
          <div key={index}>{answer}</div>
        ))}
    </div>
    </section>
    </>
  ) 
}
export default Questions
