import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useTrivia from './hook/useTriviaGet';
import { useState } from 'react';

function App() {

  const [getLevel, setGetLevel] = useState('');
  const [score, setScore] = useState(0)
  const [currQues, setCurrQues] = useState(0);
  

  const fetchLevel = (level) => {
    return setGetLevel(level);
  }

  const quizData = useTrivia(getLevel)

  const quizResults = quizData.data

  console.log('the quiz fetched from the trivia hook is:', quizResults)

  const quesNum = (num) => {
    setCurrQues(currQues + num)
  }

  const scoreState = (num) => {
    setScore(score + num)
  }

  const resetScore = (num) => {
    setScore(num)
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <h1>App testing</h1>
        <Switch>
          <Route path='/' exact component={()=><Home/>} />
          <Route path='/dashboard' component={()=><Dashboard fLevel={fetchLevel}/>} />
          <Route path='/quiz' component={()=><Quiz quizRes={quizResults} score={score} scoreState={scoreState} resScore={resetScore} currQues={currQues} quesNum={quesNum}/>} />
          <Route path='/result' component={()=><Result/>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
