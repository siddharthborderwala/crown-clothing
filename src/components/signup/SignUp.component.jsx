import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from './../form-input/FormInput.component';
import CustomButton from './../custom-button/CustomButton.component';

import './sign-up.styles.scss';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ email, password, displayName });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit} autoComplete="off">
        <FormInput
          type="text"
          name="displayName"
          label="display name"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="confirm password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapStateToPtops = (dispatch) => ({
  signUpStart: (userDetails) => dispatch(signUpStart(userDetails)),
});

export default connect(undefined, mapStateToPtops)(SignUp);
