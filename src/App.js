import React, { Component, useEffect } from "react";
import { fetchSmurfs } from "./actions";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    console.log("CDM working")
    this.props.dispatch(fetchSmurfs());
  }
  
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     smurfs: state.quote,
//     loading: state.loading,
//     error: state.error
//   }
// }

export default connect(null)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.