import React, { Component } from 'react';
import './App.css';
import SearchBorder from './components/SearchBorder';
import CheckBox from './components/CheckBox';
import TextBox from './components/TextBox';
import ListBox from './components/ListBox';
import WeatherBox from './components/WeatherBox';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            simTweets: [],
        };
    }

    getSimilarTweets() {
        let uri = 'https://localhost:3001/twitter';
        axios.post(uri)
          .then((response) => {
            this.setState({weather: response.data.current_observation.condition.text});
            console.log(response.data.current_observation.condition.text);
          })
          .catch((error) => {
            console.log('Similar Tweets fetch failed');
            console.log(error);
          });
      }

    render() {
        return (
            <div className="App">
                <h1>Twitter Finder</h1>
                <WeatherBox />
                <div className="Centered-Container">
                    <SearchBorder headerTitle={'Search'} fontSize={100}>
                        <CheckBox />
                        <TextBox />
                    </SearchBorder>
                    <SearchBorder headerTitle={'Results'}>
                        <ListBox simTweets={this.state.simTweets}/>
                    </SearchBorder>
                </div>
            </div>
        );
    }
}

export default App;


