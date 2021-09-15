import React, {useState} from 'react'
import { useHistory } from 'react-router';
import logo from '../img/quizred.png'


const Dashboard = ({fLevel, userData}) => {

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
      <h1 className="Dash_Title">Welcome</h1> 
      <span className="Dash_UserName">{userData}</span>
      <p className="Dash_Text">Choose the difficult level and click on the button to start</p>
      <figure className="Dash_Fig">
        <img className="Dash_Logo" src={logo}  alt="quiz game logo" />
      </figure>
      <p className="Dash_Obs">the prize changes accordingly to the difficult level choosed</p>

    <form className="Dash_Form" id="dash_level">
      <fieldset>
        <legend>Please select your level</legend>
        <div className="Dash_Opt">
          <input type="radio" id="easy" name="level" value="easy" onChange={handleChange} className="radio"/>
          <label htmlFor="easy">easy</label>
        </div>
        <div className="Dash_Opt">
          <input type="radio" id="medium" name="level" value="medium" onChange={handleChange} className="radio"/>
          <label htmlFor="medium">medium</label>
        </div>
        <div className="Dash_Opt">
          <input type="radio" id="hard" name="level" value="hard" onChange={handleChange} className="radio"/>
          <label htmlFor="hard">hard</label>
        </div>
      </fieldset>
        <button type="submit" form="dash_level" className="Dash_Submit" onClick={fetchQuiz}>start</button>
    </form>

    </div>
  )
}

export default Dashboard
