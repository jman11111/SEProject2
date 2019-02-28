import React, { Component } from 'react';
import {styles} from './styles';
import axios from 'axios';

class WeatherBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: '',
            weather: ''
        };
    }

    getWeather() {
        let uri = 'https://localhost:3000/weather';
        axios.post(uri)
          .then((response) => {
            this.setState({weather: response.data.current_observation.condition.text});
            console.log(response.data.current_observation.condition.text);
          })
          .catch((error) => {
            console.log('Weather data fetch failed');
            console.log(error);
          });
      }
    
    render () {
        return (
            <div>
                 <p>
                    <input type="text" placeholder="(Location for Weather)" id='field1'></input>
                 </p>
                <form>
                    <button type="search" style={{fontSize: 15}} id='buttonfield1'>Search</button>
                </form>
            </div>
        )
    }
}

export default WeatherBox;