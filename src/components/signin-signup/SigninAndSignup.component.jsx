import React from 'react';
import './signin-and-signup.styles.scss';

import SignIn from './../signin/SignIn.component';
import SignUp from './../signup/SignUp.component';

const SigninAndSignup = () => (
  <div className="signin-and-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default SigninAndSignup;
