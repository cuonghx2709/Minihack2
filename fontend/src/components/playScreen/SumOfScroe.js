import React, { Component } from 'react';

class SumOfScroe extends Component {
    
    render() {

        let player = this.props.player
        return (
            <div className="row sum-of-score p-2 mx-0">
                <div className="col-3 font-weight-bold" id="sumofScore">Sum of Score ({player[0] + player[1] + player[2] + player[3]})</div>
                <div className="col-2 font-weight-bold" id="score-player1"> {player[0]}</div>
                <div className="col-2 font-weight-bold" id="score-player2"> {player[1]}</div>
                <div className="col-2 font-weight-bold" id="score-player3">{player[2]}</div>
                <div className="col-2 font-weight-bold" id="score-player4"> {player[3]}</div>
            </div>
        );
    }
}

export default SumOfScroe;