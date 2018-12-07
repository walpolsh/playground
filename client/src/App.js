import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playground from './components/Playground'; 

class App extends Component {
  state = {
    response: '',
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/index');
    const body = await response.json();
    console.log(response)
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  render() {
    return (
      <div className="App">
        <p>{this.state.response}</p>
        <Playground />
      </div>
    );
  }
}

export default App;
