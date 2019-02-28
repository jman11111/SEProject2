const axios = require('axios');

const testresponse = () => {
  try {
    return axios.post('http://localhost:3000/twitter', {
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
        for(var i = 0;i<response.data.statuses.length;i++){
        console.log('Recieved' + JSON.stringify(response.data.statuses[i].text));
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
}

sendPOST()
