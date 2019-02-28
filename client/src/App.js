import React, { Component } from 'react';
import './App.css';
import SearchBorder from './components/SearchBorder';
import CheckBox from './components/CheckBox';
import TextBox from './components/TextBox';
import ListBox from './components/ListBox';
import WeatherBox from './components/WeatherBox';
import axios from 'axios';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Twitter Finder</h1>
                <WeatherBox />
                <div className="Centered-Container">
                    <SearchBorder headerTitle={'Search'} fontSize={100}>
                        <p>
                            {/* use this form instead of the CheckBox component; looks nicer */}
                            <form action="/submit-tweet">
                                <label for="Topics"><input id="Topics" type="checkbox" name="Tweet Filters" /> Topics</label>
                                <label for="Mentions"><input id="Mentions" type="checkbox" name="Tweet Filters" /> Mentions</label>
                                <label for="URL"><input id="URL" type="checkbox" name="Tweet Filters" /> URL</label>
                            </form>
                            <TextBox />
                            <form>
                                <button type="submit" style={{fontSize: 30}}>Submit</button>
                            </form>
                        </p>
                    </SearchBorder>
                    <SearchBorder headerTitle={'Results'}>
                        <p>
                            <ListBox />
                        </p>
                        
                    </SearchBorder>
                </div>
            </div>
        );
    }
}

export default App;


