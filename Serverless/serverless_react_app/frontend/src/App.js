import React, { useReducer } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Products from './components/Products';
import Welcome from './components/auth/Welcome';
import Footer from './components/Footer';
import FixedMenu from './components/FixedMenu';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Registered from './components/auth/Registered';
import ProfileForm from './components/auth/ProfileForm';

import { Context, getInitialState, reducer } from "./Store";
import history from "./history";

  function App() {
    const [store, dispatch] = useReducer(reducer, getInitialState());
    return (
      <div className="App">
        <Context.Provider value={{ store, dispatch }}>
        <Router history={history}>
          <div>
            <FixedMenu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/register" component={RegisterForm} />
              <Route exact path="/registered" component={Registered} />
              <Route exact path="/profile" component={ProfileForm} />
              {/* <Route exact path="/admin" component={ProductAdmin} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
              <Route exact path="/changepassword" component={ChangePassword} />
              */}
              <Route exact path="/welcome" component={Welcome} />
            </Switch>
            <Footer />
          </div>
        </Router>
        </Context.Provider>
      </div>
    );
  }

export default App;
