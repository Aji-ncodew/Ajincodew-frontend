import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Login.css';

const Login: React.FC = () => {
  const [isContainerActive, setContainerActive] = useState(false);

  const handleToggleClick = () => {
    setContainerActive(!isContainerActive);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div id="auth" className={`container ${isContainerActive ? 'active' : ''}`}>
        <div className={`form-container ${isContainerActive ? 'sign-in' : 'sign-up'}`}>
          <form>
            <h1>{isContainerActive ? 'Sign In' : 'Create Account'}</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            {!isContainerActive && <span>or use your email for registration</span>}
            {!isContainerActive && <input type="text" placeholder="Name" />}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>{isContainerActive ? 'Sign In' : 'Sign Up'}</button>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className={`toggle-panel toggle-${isContainerActive ? 'left' : 'right'}`}>
              <h1>{isContainerActive ? 'Welcome Back!' : 'Hello, Friend!'}</h1>
              <p>{isContainerActive ? 'To keep connected with us, please login with your personal info' : 'Register with your personal details to use all of the site features'}</p>
              <button className='btn' style={{ color: 'white' }} onClick={handleToggleClick}>
                {isContainerActive ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
