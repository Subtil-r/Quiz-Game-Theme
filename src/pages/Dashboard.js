import React, {useState} from 'react'
import { useHistory } from 'react-router';


import { useEffect } from 'react';

const Dashboard = ({fLevel}) => {

  const [level,setLevel]=useState('');
  
  const handleChange=(e)=>{
      e.preventDefault()
      setLevel( e.target.value);    
    }
  
    

  const history = useHistory();

  const setTime = () => {
      setTimeout(() => {
        history.push('/quiz')
      }, 500)
    }
  

  const fetchQuiz = (e) => {
    if(level === ''){
     console.log('choose')
     history.push('/dashboard')
    } else {
      e.preventDefault()
      console.log(level)
      fLevel(level)
      setTime()
    }
  }

  return (
    <div className="Dash_Container">
      <h1 className="Dash_Title">Welcome, UserName!</h1>
      <p className="Dash_Text">Choose the difficult level and click on the button to start</p>
      <p className="Dash_Obs">(the prize changes accordingly to the difficult level choosed)</p>

    <form className="Dash_Form" id="dash_level">
      <p >Please select your level:</p>
      <input type="radio" id="easy" name="level" value="easy" onChange={handleChange}/>
      <label htmlFor="easy">easy</label>
      <input type="radio" id="medium" name="level" value="medium" onChange={handleChange}/>
      <label htmlFor="medium">medium</label>
      <input type="radio" id="hard" name="level" value="hard" onChange={handleChange}/>
      <label htmlFor="hard">hard</label>
      <button type="submit" form="dash_level" onClick={fetchQuiz}>start</button>
    </form>

    </div>
  )
}

export default Dashboard
