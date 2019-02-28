import React, { Component } from 'react';
import {styles} from './styles';

class TextBox extends Component {
    render () {
        return (
            <div>
                <input type="text" placeholder="(insert tweet here)" style={styles.boxBackground}></input>
            </div> 
        );
    }
}

export default TextBox;