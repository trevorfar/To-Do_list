import React from 'react'
import './Questions.css'
const Questions:React.FC = () => {
  const myArray = [['Question 1', 'Question 2'], ['test 1', 'test 2']];
  return (
    <>
    <h1>Project</h1>
    <section className="questions-container">
    <div className="title">{myArray[0][0]}</div>
    <div className="question-content"></div>
    <div className="answer">
        <ul>
            <li>A</li><li>B</li><li>C</li><li>D</li>
        </ul>
    </div>
    <div className="comp">Skip</div>
    </section>
    </>
  ) 
}
export default Questions
