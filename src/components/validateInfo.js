export default function validateInfo(values){
  let errors = {}

  if (!values.username.trim()) {
    errors.username = 'A name is required';
  }

  if (!values.email) {
    errors.email = 'An E-mail is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'E-mail address invalid';
  }

  return errors;
}