import React, { useState } from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';

import FormInput from './../form-input/FormInput.component';
import CustomButton from './../custom-button/CustomButton.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = userCredentials;

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Signin with your email and password</span>

      <form onSubmit={handleSubmit} autoComplete="off">
        <FormInput
          type="email"
          name="email"
          label="email"
          value={userCredentials.email}
          id="signin-email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={userCredentials.password}
          id="signin-pass"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispacthToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password)),
});

export default connect(undefined, mapDispacthToProps)(SignIn);
