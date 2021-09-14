import React, {useState} from 'react'
import { useHistory } from 'react-router';
import UserForm from '../components/UserForm'

const Home = ({userData}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const history = useHistory();

  function submitForm() {
    setIsSubmitted(true);
    history.push('/dashboard')
  }

  return (
    <div className="home_container">
      <img src='https://www.freelogodesign.org/manager/showcase/27b9b99934b6420badf523e04480077a' alt="quiz game logo" />
      <p>You’re not a video game expert until you’ve successfully answered this video game trivia. If you think you’re a real gamer, it’s time for the ultimate test. </p>
      <UserForm  submitForm={submitForm} userData={userData} />
    </div>
  )
}

export default Home
