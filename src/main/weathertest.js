const axios = require('axios');

const testresponse = () => {
    try {
        return axios.post('http://localhost:3001/weather', {
                location: 'Chi'
            }
        )
    } catch (error) {
        console.error(error)
    }
}

const sendPOST = async () => {
    const response = testresponse()
        .then(response => {
            if (response.data) {
                console.log('Location used ' + JSON.stringify(response.data.location.city));
                console.log('Current Condition ' + JSON.stringify(response.data.current_observation.condition.text));
                console.log('Current Temperture ' + JSON.stringify(response.data.current_observation.condition.temperature));
            }
        })
        .catch(error => {
            console.log(error)
        })
}

sendPOST()