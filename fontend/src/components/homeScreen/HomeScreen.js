import React, { Component } from 'react';
import RowInput from './RowInput';
import Button from './Button';

class HomeScreen extends Component {

    state = {
        input1: "",
        input2: "",
        input3: "",
        input4: ""
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <RowInput obj={this} index={1} />
                    <RowInput obj={this} index={2} />
                    <RowInput obj={this} index={3} />
                    <RowInput obj={this} index={4} />
                    <Button />
                </form>
            </div>
        );
    }

    onchangeInput(index, value) {
        switch (index) {
            case 1:
                this.setState({ input1: value })
                break
            case 2:
                this.setState({ input2: value })
                break
            case 3:
                this.setState({ input3: value })
                break
            case 4:
                this.setState({ input4: value })
                break
            default:
                break
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.objParent.onSubmitPlay(this.state)
    }
}

export default HomeScreen;