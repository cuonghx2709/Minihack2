import React, { Component } from 'react';
import Header from './Header';
import SumOfScroe from './SumOfScroe';
import RowScore from './RowScore';
import ButtonAdd from './ButtonAdd';

class PlayScreen extends Component {

    state = {
        numberOfRow: 1,
        listScore:[],
        lists: []
    }

    render() {
        console.log("create")
        let listScore = []

        let newList = this.state.lists
        let itemList = [0,0,0,0]
        newList.push(itemList)

        let player = [0,0,0,0]

        

        // eslint-disable-next-line
        this.state.lists = newList

        for (let i = 0;i < this.state.numberOfRow;i++){
            listScore.push(<RowScore key = {i}  index = {i} obj = {this}/>)
            player[0] += this.state.lists[i][0]
            player[1] += this.state.lists[i][1]
            player[2] += this.state.lists[i][2]
            player[3] += this.state.lists[i][3]
        }

        console.log(player)

        console.log(this.state.lists)


        return (
            <div>
                <Header playerName = {this.props.playerName}/>
                <SumOfScroe player = {player}/>
                {listScore}
                <ButtonAdd onAddClick = {this.onAddClick}/>
            </div>
        );
    }

    valueChage = (row, index, value) => {
        console.log(row + " : " + index + ": " + value)
        let l = this.state.lists
        l[row][index] = parseInt(value, 10)
        console.log("row "+ l[row][index])
        this.setState({lists: l})
    }

    onAddClick = () => {
        this.setState({numberOfRow: this.state.numberOfRow + 1})
    }
}

export default PlayScreen;