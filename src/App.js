import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import { auth, createUserProfileDocument } from './firebase/firbase.util';
import Header from './components/header/Header.component';
import HomePage from './pages/home-page/HomePage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import SigninAndSignup from './components/signin-signup/SigninAndSignup.component';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact={true}
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninAndSignup />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
