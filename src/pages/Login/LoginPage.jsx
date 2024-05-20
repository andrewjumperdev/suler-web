import React, { useState } from 'react'
import './LoginPage.css'

const LoginPage = ({ setAuth }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
    const handleLogin = async (e) => {
      e.preventDefault();
      console.log('Username:', username);
      console.log('Password:', password);
    };

  return (
    <div className='container__main-login'>
        <div className="container--row">
            <div className="container--col">
                <div className="container__avatar">
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="container__input-group">
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                      <form className='container__form' onSubmit={handleLogin}>
                        <div className='container__input'>
                          <input
                            type="username"
                            value={username}
                            className='input--styles roboto-light'
                            placeholder='Username'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </div>
                        <div className='container__input'>
                          <input
                            className='input--styles roboto-light'
                            type="password"
                            placeholder='***************'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <button className='button button--primary' type="submit">Login</button>
                      </form>
                </div>
                <div className="container__or">
                  <span className="line"></span>
                    <p className='or-text roboto-medium'>Or</p>
                  <span className="line"></span>
                </div>
                <button className='button button--secondary' type="submit">Signup</button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage;