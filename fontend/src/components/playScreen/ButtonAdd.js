import React, { Component } from 'react';

class ButtonAdd extends Component {
    render() {
        return (
            <div className="w-100 text-center">
                <div className="btn btn-create mx-auto mt-5 px-5 py-2" id="add-round" onClick = {this.props.onAddClick} >ADD ROUND</div>
            </div>
        );
    }
}

export default ButtonAdd;