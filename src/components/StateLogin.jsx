import { useInput } from '../hooks/useTouchedError.js';
import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: hasEmailError,
  } = useInput('', (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: hasPasswordError,
  } = useInput('', (value) => {
    return isNotEmpty(value) && hasMinLength(value.password, 6);
  });

  function handleSubmit(event) {
    event.preventDefault();

    if (hasEmailError || hasPasswordError) {
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          value={emailValue}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          error={hasEmailError && 'Please enter a valid email address.'}
        />
        <Input
          label='Password'
          id='password'
          type='password'
          name='password'
          value={passwordValue}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          error={hasPasswordError && 'Please enter a valid password.'}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
