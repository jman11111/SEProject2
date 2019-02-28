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

    render () {
        return (
            <div>
                <input onChange={this.onInputChange} type="text" placeholder="(insert tweet here)" style={styles.boxBackground}></input>
                <form>
                    <button type="submit" style={{fontSize: 30}}>Submit</button>
                </form>
            </div> 
        );
    }
}

export default TextBox;