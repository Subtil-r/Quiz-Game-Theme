import React, {useState} from 'react'
import UserForm from '../components/UserForm'
import Dashboard from '../pages/Dashboard'

const Home = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      <h1>I'm Home</h1>
      <p>You’re not a video game expert until you’ve successfully answered this video game trivia. If you think you’re a real gamer, it’s time for the ultimate test. </p>
      {!isSubmitted ? (
          <UserForm submitForm={submitForm} />
        ) : (
          <Dashboard />
        )}
    </div>
  )
}

export default Home
