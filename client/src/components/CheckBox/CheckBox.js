import React, { Component } from 'react';
import {styles} from './styles';

class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCheckedT: false,
            isCheckedM: false,
            isCheckedURL: false,
        }
    }

    flipTopicsSwitch = () => {
        this.setState({
            isCheckedT: this.state.isCheckedT? false: true,
        });
    }

    flipMentionsSwitch = () => {
        this.setState({
            isCheckedM: this.state.isCheckedM? false: true,
        });
    }

    flipURLSwitch = () => {
        this.setState({
            isCheckedURL: this.state.isCheckedURL? false: true,
        })
    }

    render () {
        return (
            <div onClick={this.flipSwitch} style={styles.boxBackground}>
                <p style={styles.checkText}>
                    <form action="/submit-tweet">
                        <label for="Topics"><input onChange={this.flipTopicsSwitch} id="Topics" type="checkbox" value={this.state.isCheckedT} name="Tweet Filters" /> Topics</label>
                        <label for="Mentions"><input onChange={this.flipMentionsSwitch} id="Mentions" type="checkbox" value={this.state.isCheckedM} name="Tweet Filters" /> Mentions</label>
                        <label for="URL"><input onChange={this.flipURLSwitch} id="URL" type="checkbox" value={this.state.isCheckedURL} name="Tweet Filters" /> URL</label>
                    </form>
                </p>
            </div>
        );
    }
}

export default CheckBox;