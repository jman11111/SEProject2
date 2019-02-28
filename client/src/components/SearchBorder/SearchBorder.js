import React from 'react';
import {styles} from './styles';

const SearchBorder = (props) => {
    return (
        <div style={styles.boxBackground} >
            <div style={styles.header}>
                <p>{props.headerTitle}</p>
            </div>
            <div style={styles.childContainer}>
                {props.children}
            </div>
        </div>
    );
}

export default SearchBorder;