import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className ="row p-2 mx-0">
                <div className ="col-3"></div>
                <div className ="col-2 font-weight-bold" id="player1"> {this.props.playerName[0] === "" ? "Player 1": this.props.playerName[0]}</div>
                <div className ="col-2 font-weight-bold" id="player2"> {this.props.playerName[1] === "" ? "Player 2": this.props.playerName[1]}</div>
                <div className ="col-2 font-weight-bold" id="player3"> {this.props.playerName[2] === "" ? "Player 3": this.props.playerName[2]}</div>
                <div className ="col-2 font-weight-bold" id="player4"> {this.props.playerName[3] === "" ? "Player 4": this.props.playerName[3]}</div>
            </div>
        );
    }
}

export default Header;