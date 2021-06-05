import React, { useState, useEffect, useHistory } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, signUpUser } from '../actions/actions';
import '../css/Login.css';

function LoginComp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showSignUp, setShowSignUp] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  const handleSubmit = (e, email, password) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    setEmail('');
    setPassword('');
  };
  const handleSignUpSubmit = (e, name, email, password, passwordConfirm) => {
    e.preventDefault();
    dispatch(signUpUser(name, email, password, passwordConfirm));
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };
  return (
    <div className='loginComp'>
      <div className='login__container'>
        <div className='hero__title'>
          <h1>Welcome To Tasks</h1>
        </div>
        <div className='options'>
          <button
            className='signUpOption activeOpn'
            onClick={() => {
              document
                .querySelector('.signUpOption')
                .classList.toggle('activeOpn');
              document
                .querySelector('.loginOption')
                .classList.toggle('activeOpn');
              setShowSignUp(true);
              setShowLogin(false);
            }}
          >
            SignUp
          </button>
          <button
            className='loginOption'
            onClick={() => {
              document
                .querySelector('.loginOption')
                .classList.toggle('activeOpn');
              document
                .querySelector('.signUpOption')
                .classList.toggle('activeOpn');
              setShowSignUp(false);
              setShowLogin(true);
            }}
          >
            Login
          </button>
        </div>
        {showLogin && (
          <div className='login-box'>
            <form>
              <input
                type='email'
                required
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                required
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type='submit'
                onClick={(e) => handleSubmit(e, email, password)}
              >
                Submit
              </button>
            </form>
          </div>
        )}
        {showSignUp && (
          <div className='login-box'>
            <form>
              <input
                placeholder='name'
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                required
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                required
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type='password'
                required
                placeholder='passwordConfirm'
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
              <button
                type='submit'
                onClick={(e) =>
                  handleSignUpSubmit(e, name, email, password, passwordConfirm)
                }
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginComp;
