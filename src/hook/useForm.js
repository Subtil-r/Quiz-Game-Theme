import  { useState, useEffect } from "react"

const useForm = (callback, validateInfo, userData) => {
  const [values, setValues] = useState({
    username: '',
    email: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmitting(true)
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        userData(values)

      }
    },
    [errors]
  );

  return {handleChange, values, handleSubmit, errors};

}

export default useForm
