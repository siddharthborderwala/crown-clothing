import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import Header from './components/header/Header.component';
import HomePage from './pages/home-page/HomePage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import SigninAndSignup from './components/signin-signup/SigninAndSignup.component';
import CheckoutPage from './pages/checkout/CheckoutPage.component';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import NotFoundPageComponent from './pages/not-found-page/NotFoundPage.component';

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact={true} path="/checkout" component={CheckoutPage} />
        <Route
          exact={true}
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SigninAndSignup />)}
        />
        <Route component={NotFoundPageComponent} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToPtops = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToPtops)(App);
