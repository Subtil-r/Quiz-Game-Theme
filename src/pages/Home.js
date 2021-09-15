import React, {useState} from 'react'
import { useHistory } from 'react-router';
import UserForm from '../components/UserForm'
import logo from '../img/quizred.png'

const Home = ({userData}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const history = useHistory();

  function submitForm() {
    setIsSubmitted(true);
    history.push('/dashboard')
  }

  return (
    <div className="home_container">
      <figure className="Home_Fig">
        <img className="Home_Logo" src={logo}  alt="quiz game logo" />
      </figure>
      <p className="Home_Text">You’re not a video game expert until you’ve successfully answered this video game trivia. If you think you’re a real gamer, it’s time for the ultimate test. </p>
      <UserForm  submitForm={submitForm} userData={userData} />
    </div>
  )
}

export default Home
