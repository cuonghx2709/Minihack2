import React, { Component } from 'react';

class RowInput extends Component {
    placeholder = "Player"+ this.props.index +" .."

    render() {
        return (
            <div className="mt-4 w-100 ">
                <input type="text" className="w-100 input " id="player1" placeholder={this.placeholder} onChange = {this.onChange}/>
            </div>
        );
    }

    onChange = (e) =>{
        this.props.obj.onchangeInput(this.props.index, e.target.value)
    }
}

export default RowInput;