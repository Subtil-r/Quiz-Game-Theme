import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useTrivia from './hook/useTriviaGet';
import { useEffect, useState } from 'react';
import "animate.css"

function App() {

  const [getLevel, setGetLevel] = useState('');
  const [score, setScore] = useState(0)
  const [currQues, setCurrQues] = useState(0);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
   console.log(userData)
  }, [userData])
  
  const getUserData = (val) => {
    return setUserData(val);
  }

  const fetchLevel = (level) => {
    return setGetLevel(level);
  }

  const quizData = useTrivia(getLevel)

  const quizResults = quizData.data

  const quesNum = (num) => {
    setCurrQues(currQues + num)
  }

  const resQuesNum = (num) => {
    setCurrQues(num)
  }

  const scoreState = (num) => {
    setScore(score + num)
  }

  const resetScore = (num) => {
    setScore(num)
  }

  
  return (
    <BrowserRouter>
      <div className="app_container">
        <Switch>
          <Route path='/' exact component={()=><Home userData={getUserData}/>} />
          <Route path='/dashboard' component={()=><Dashboard fLevel={fetchLevel} userData={userData.username}/>} />
          <Route path='/quiz' component={()=><Quiz quizRes={quizResults} score={score} scoreState={scoreState} resScore={resetScore} currQues={currQues} quesNum={quesNum} resQuesNum={resQuesNum} userData={userData.username}/>} />
          <Route path='/result' component={()=><Result level={getLevel} score={score}  resQuesNum={resQuesNum} resetScore={resetScore} userData={userData.email}/>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
