import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import useTrivia from './hook/useTriviaGet';
//import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [questions, setQuestions] = useState();
  const [show, setShow] = useState(false)

  const fetchQuestions = async (level) => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=15&difficulty=${level}&type=multiple`);

    setQuestions(data.results);
    
  };

 
  console.log('as questoes vindas depois do dashboard', questions)

  return (
    <BrowserRouter>
      <div className="App">
        <h1>App testing</h1>
        <Switch>
          <Route path='/' exact component={()=><Home/>} />
          <Route path='/dashboard' component={()=><Dashboard fLevel={fetchQuestions}/>} />
          <Route path='/quiz' component={()=><Quiz quizRes={questions} />} />
          <Route path='/result' component={()=><Result/>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
