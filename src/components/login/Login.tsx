import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Login.css';

const Login: React.FC = () => {

  const [isContainerActive, setContainerActive] = useState(false);

  const handleToggleClick = () => {
    setContainerActive(!isContainerActive);
  };

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email : any) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const validatePassword = (password : any) => {
    // Exige au moins 8 caractères, au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };
  
  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Veuillez saisir une adresse email valide.');
      return;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Le mot de passe doit comporter au moins 8 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial.');
      return;
    } else {
      setPasswordError('');
    }

    console.log("email : "+email+" password : "+password);
  };

  // const handleLogin = async(e) => {
  //   e.preventDefault()
  //  axios.post('/api/login', {
  //   email: email,
  //   password : password,
  // })  
  // .then(response => {
  //   if (response.status === 201) {
  //     router.push('/admin/chemDashboard');
  //   }else {
  //     throw new Error('Request failed with status ' + response.status);
  //   }
  // });
    
    

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div id="auth" className={`container ${isContainerActive ? 'active' : ''}`}>
        <div className={`form-container ${isContainerActive ? 'sign-in' : 'sign-up'}`}>
          <form onSubmit={handleSubmit}>
            <h1>{isContainerActive ? 'Sign In' : 'Create Account'}</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            {!isContainerActive && <span>or use your email for registration</span>}
            {!isContainerActive && <input type="text" placeholder="Name" />}


            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
            {emailError && <span style={{ color: 'red' }}>{emailError}</span>}


            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
            {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}

            <button type='submit'>{isContainerActive ? 'Sign In' : 'Sign Up'}</button>
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
