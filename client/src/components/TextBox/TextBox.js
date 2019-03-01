import React, { Component } from 'react';
import {styles} from './styles';

class TextBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
        };
    }

    onInputChange = (event) => {
        this.setState({
            input: event.target.value,
        });
    }

    handleSubmit = (event) => {
        alert('A tweet was submitted: ' + this.state.value);
        this.setState({value: event.state.value});
        event.preventDefault();
    }

    render () {
        return (
            <div>
                <input onChange={this.onInputChange} value={this.state.value} type="text" placeholder="(insert tweet here)" style={styles.boxBackground}></input>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" style={{fontSize: 30}}>Submit</button>
                </form>
            </div> 
        );
    }
}

export default TextBox;