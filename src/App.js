import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home';
import Customers from './components/Customers/Customers';
import AllBills from './components/AllBills/AllBills';
import Account from './components/Account/Account';
import MainLayout from './layouts/MainLayout/MainLayout';
import AddNewBill from './components/AddNewBill/AddNewBill';

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/customers"  component={Customers} />
          <Route exact path="/bills"  component={AllBills} />
          <Route exact path="/account"  component={Account} />
          <Route exact path="/new-bill"  component={AddNewBill} />
          <Redirect to="/" />
      </Switch>
      </MainLayout>
    );
  }
}

export default App;
