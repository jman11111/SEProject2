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

const testresponse2 = () => {
    try {
        return axios.post('http://localhost:3001/weather', {
                location: 'Rome'
            }
        )
    } catch (error) {
        console.error(error)
    }
   

}

const sendPOST2 = async () => {
    const response2 = testresponse2()
        .then(response2 => {
            if (response2.data) {
                console.log('Location used ' + JSON.stringify(response2.data.location.city));
                console.log('Current Condition ' + JSON.stringify(response2.data.current_observation.condition.text));
                console.log('Current Temperture ' + JSON.stringify(response2.data.current_observation.condition.temperature));
            }
        })
        .catch(error => {
            console.log(error)
        })
}
const testresponse3 = () => {
    try {
        return axios.post('http://localhost:3001/weather', {
                location: '"London'
            }
        )
    } catch (error) {
        console.error(error)
    }
   

}
const sendPOST3 = async () => {
    const response3 = testresponse3()
        .then(response3 => {
            if (response3.data) {
                console.log('Location used ' + JSON.stringify(response3.data.location.city));
                console.log('Current Condition ' + JSON.stringify(response3.data.current_observation.condition.text));
                console.log('Current Temperture ' + JSON.stringify(response3.data.current_observation.condition.temperature));
            }
        })
        .catch(error => {
            console.log(error)
        })
}

const testresponse4 = () => {
    try {
        return axios.post('http://localhost:3001/weather', {
                location: 'Sydney'
            }
        )
    } catch (error) {
        console.error(error)
    }
   

}

const sendPOST4 = async () => {
    const response4 = testresponse4()
        .then(response4 => {
            if (response4.data) {
                console.log('Location used ' + JSON.stringify(response4.data.location.city));
                console.log('Current Condition ' + JSON.stringify(response4.data.current_observation.condition.text));
                console.log('Current Temperture ' + JSON.stringify(response4.data.current_observation.condition.temperature));
            }
        })
        .catch(error => {
            console.log(error)
        })
}

const testresponse5 = () => {
    try {
        return axios.post('http://localhost:3001/weather', {
                location: 'Boston'
            }
        )
    } catch (error) {
        console.error(error)
    }
   

}
const sendPOST5 = async () => {
    const response5 = testresponse5()
        .then(response5 => {
            if (response5.data) {
                console.log('Location used ' + JSON.stringify(response5.data.location.city));
                console.log('Current Condition ' + JSON.stringify(response5.data.current_observation.condition.text));
                console.log('Current Temperture ' + JSON.stringify(response5.data.current_observation.condition.temperature));
            }
        })
        .catch(error => {
            console.log(error)
        })
}






sendPOST();
sendPOST2();
sendPOST3();
sendPOST4();
sendPOST5();