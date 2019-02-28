const axios = require('axios');

const testresponse = () => {
  try {
    return axios.post('http://localhost:3000', {
      tweet: '#yeet'
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
        console.log('Recieved' + JSON.stringify(response.data.statuses[0].text));
      }
    })
    .catch(error => {
      console.log(error)
    })
}

sendPOST()
