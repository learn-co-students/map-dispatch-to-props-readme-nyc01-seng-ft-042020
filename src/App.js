import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    // this.props.store.dispatch(addItem());
    this.props.addItem()
  }

  render() {

    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// new func mapDispatchToProps takes dispatch as an argument
// returns an obj that contains a func as value
const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//connect takes 2 arguments