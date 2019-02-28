import React, { Component } from 'react';
import {styles} from './styles';
import axios from 'axios';

const ListBox = (props) => {
    function renderList () {
        let { simTweets } = props;
        if (simTweets.length === 0)
        return (<p>No tweets to show</p>);
        
        return (
            <div style={styles.boxBackground}>
                {simTweets.map(value => {
                    return (
                        <div>
                            <p>{value}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
    return renderList();
}

export default ListBox;