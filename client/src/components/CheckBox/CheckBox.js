import React, { Component } from 'react';
import {styles} from './styles';

class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: false,
        }
    }

    flipSwitch = () => {
        this.setState({
            isChecked: this.state.isChecked? false: true
        });
    }

    render () {
        return (
            <div onClick={this.flipSwitch} style={styles.boxBackground}>
                <p style={styles.checkText}>{this.state.isChecked? 'X': ''}</p>
            </div>
        );
    }
}

export default CheckBox;