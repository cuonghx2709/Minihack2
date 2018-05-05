import React, { Component } from 'react';

class RowScore extends Component {
    render() {
        return (
            <div className="row p-2 mx-0">
            <div className="col-3 font-weight-bold">Round {this.props.index + 1}</div>
                <div className="col-2 font-weight-bold">
                    <input type="number" className="w-50 input-round" placeholder = "0" id = "1" onChange = {this.onChange.bind(this, 0)}></input>
                </div>
                <div className="col-2 font-weight-bold">
                    <input type="number" className="w-50 input-round" placeholder = "0" id = "2" onChange = {this.onChange.bind(this, 1)}></input>
                </div>
                <div className="col-2 font-weight-bold">
                    <input type="number" className="w-50 input-round" placeholder = "0" id = "3" onChange = {this.onChange.bind(this, 2)}></input>
                </div>
                <div className="col-2 font-weight-bold">
                    <input type="number" className="w-50 input-round" placeholder = "0" id = "4" onChange = {this.onChange.bind(this, 3)}></input>
                </div>
            </div>
        );
    }

    onChange = (id,event) =>{
        this.props.obj.valueChage(this.props.index, id, event.target.value === "" ? 0 : event.target.value)
    }
}

export default RowScore;