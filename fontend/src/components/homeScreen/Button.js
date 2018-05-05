import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div className="w-100 text-center">
                <button className="btn btn-create mx-auto mt-5" id="button-create" type ="submit"  >CREATE NEW GAME</button>
            </div>
        );
    }
}

export default Button;