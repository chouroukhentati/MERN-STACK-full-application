import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppNavbar from './components/Appnavbar';
import ShoppingList from './components/ShoppingList';
import ItemModel from './components/itemModel';
import {Container} from 'reactstrap';
import {Provider} from'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';


class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar/>
      <Container>
      <ItemModel/>
      <ShoppingList/>
      </Container>
    </div>
    </Provider>
  );
}
}
export default App;
