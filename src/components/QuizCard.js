import {useState} from 'react'
import { useHistory } from 'react-router'


const QuizCard = ({currQues, setCurrQues, quizRes, correct, options, setScore, resScore}) => {
const [selected, setSelected] = useState();
//const [error, setError] = useState(false);
const [nextVis, setNextVis] = useState("nextBtnFalse")

const history = useHistory();

const handleCheck = (i) => {
  setSelected(i)
  console.log('a funcao do handlecheck', handleCheck)
  setNextVis("nextBtnVis")
  console.log("quando clico pro check", currQues)
  
}
const handleSelect = (i) => {
  console.log('a funcao do handleselect')
  if (selected === i && selected === correct){
    return "select";
  } else if (selected === i && selected !== correct){
    return "wrong";
  }else if (i === correct){
    return "select";
  } 
}


const handleNext = () => {
  console.log('a funcao do next', handleNext)
  if (currQues > 8){
    history.push('/result')
    console.log("quando na primeira condição", currQues)
  } else if (selected){
    setCurrQues(1)
    setSelected()
    if (selected === correct) setScore(1)
    setNextVis("nextBtnFalse")
    console.log("quando clico no next", currQues)
  } else {
    setNextVis("nextBtnFalse")
    console.log("quandona ultima condição next", currQues)

  }
}
console.log('quizcard.js - currques +', currQues)
const handleQuit = () => {
  history.push('/dashboard')
  resScore(0)
  setCurrQues(0)
}
  return (
    <div>
      <h1>Question {currQues + 1}</h1>
      <h2>{ quizRes[currQues].question }</h2>
      <div className="quizcard_option">
      {
        options &&
        options.map((i) => (
              <button className={`singleOption ${selected && handleSelect (i)}`} onClick={()=>handleCheck(i)} key={i} disabled={selected}>
                {i}
              </button>
            ))
      }
      </div>
      <div className="quizcard_controls">
        <button onClick={handleQuit}>quit</button>
        <button onClick={handleNext} className={nextVis}>next</button>
      </div>
    </div>
  )
}

export default QuizCard
