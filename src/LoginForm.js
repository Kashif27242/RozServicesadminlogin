import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate login
    if (email === 'user@example.com' && password === 'password') {
      alert('Logged in successfully!');
      history.push('/home'); // Redirect to home page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  useEffect(() => {
    const pwShowHide = document.querySelectorAll('.eye-icon');
    const links = document.querySelectorAll('.link');
    const forms = document.querySelector('.forms');

    pwShowHide.forEach((eyeIcon) => {
      eyeIcon.addEventListener('click', () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll('.password');

        pwFields.forEach((password) => {
          if (password.type === 'password') {
            password.type = 'text';
            eyeIcon.classList.replace('bx-hide', 'bx-show');
          } else {
            password.type = 'password';
            eyeIcon.classList.replace('bx-show', 'bx-hide');
          }
        });
      });
    });

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        forms.classList.toggle('show-signup');
      });
    });
  }, []);

  return (
    <div>
      <section className="container forms">
        {/* Your login form JSX */}
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form onSubmit={handleLogin}>
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>

              <div className="field button-field">
                <button type="submit">Login</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Don't have an account?{' '}
                <a href="#" className="link signup-link">
                  Signup
                </a>
              </span>
            </div>
          </div>

          <div className="line"></div>

          <div className="media-options">
            <a href="#" className="field facebook">
              <i className="bx bxl-facebook facebook-icon"></i>
              <span>Login with Facebook</span>
            </a>
          </div>

          <div className="media-options">
            <a href="#" className="field google">
              <img
                src="images/google.png"
                alt=""
                className="google-img"
              />
              <span>Login with Google</span>
            </a>
          </div>
        </div>

        {/* <!-- Signup Form --> */}
        <div className="form signup">
          <div className="form-content">
            <header>Signup</header>
            <form action="#">
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                />
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Create password"
                  className="password"
                />
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="field button-field">
                <button>Signup</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Already have an account?{' '}
                <a href="#" className="link login-link">
                  Login
                </a>
              </span>
            </div>
          </div>

          <div className="line"></div>

          <div className="media-options">
            <a href="#" className="field facebook">
              <i className="bx bxl-facebook facebook-icon"></i>
              <span>Login with Facebook</span>
            </a>
          </div>

          <div className="media-options">
            <a href="#" className="field google">
              <img
                src="images/google.png"
                alt=""
                className="google-img"
              />
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
