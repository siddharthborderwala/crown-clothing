import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firbase.util';

import './App.css';
import Header from './components/header/Header.component';
import HomePage from './pages/home-page/HomePage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import SigninAndSignup from './components/signin-signup/SigninAndSignup.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState(() => {
            const currentUser = {
              id: snapShot.id,
              ...snapShot.data(),
            };
            console.log(currentUser);
            return { currentUser };
          });
        });
      } else {
        this.setState(() => ({ currentUser: userAuth }));
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
