import React from 'react';
import './sign-in.styles.scss';

import FormInput from './../form-input/FormInput.component';
import CustomButton from './../custom-button/CustomButton.component';

import {
  auth,
  signInWithGoogle,
  firestore,
} from './../../firebase/firbase.util';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState(() => ({ email: '', password: '' }));
      const data = await firestore.doc(`users/${auth.currentUser.uid}`).get();
      if (!data.data().displayName) {
        const name = prompt(
          "It's detected that you are a new user, please enter you Name for successfull account creation."
        );
        await firestore
          .doc(`users/${auth.currentUser.uid}`)
          .update({ displayName: name });
      }
    } catch (err) {
      alert('Could not login. Sorry try again.');
      console.log(err);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Signin with your email and password</span>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <FormInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            id="signin-email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            id="signin-pass"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
