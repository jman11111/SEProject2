import React, { Component } from 'react';
import {styles} from './styles';
import axios from 'axios';

class ListBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            t: [],
        };
    }

    componentDidMount() {
        let dataReceived = this.setState({ t: dataReceived});
    }
    renderList () {
        let t = [];
    
        if (t.length === 0)
        return (<p>No names to show</p>);
        
        return (
            <div style={styles.boxBackground}>
                {t.map(value => {
                    return (
                        <div>
                            <p>{value}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
    render () {
        return this.renderList();
    }
}

export default ListBox;