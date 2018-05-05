import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import HomeScreen from './components/homeScreen/HomeScreen';
import PlayScreen from './components/playScreen/PlayScreen';

class App extends Component {

  state = {
    check : true,
    player: []
  }
  playerName = []

  render() {
    return (
      <div className="container">
          <Navbar/>
          {this.state.check ? <HomeScreen objParent = {this}/> : <PlayScreen playerName = {this.playerName}/>}
      </div>
    );
  }
  onSubmitPlay = (data) => {
    this.setState({check: false})
    console.log(data)
    this.playerName[0] = data.input1
    this.playerName[1] = data.input2
    this.playerName[2] = data.input3
    this.playerName[3] = data.input4
    console.log(this.playerName)
  }
}

export default App;
